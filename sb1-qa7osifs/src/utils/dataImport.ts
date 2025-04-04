import { createClient } from '../services/clientService';
import { createVisit } from '../services/visitService';
import { createProfessional } from '../services/professionalService';
import { createProduct } from '../services/productService';
import { createAppointment } from '../services/appointmentService';
import { clientsData, professionalsData, productsData, appointmentsData } from '../data';

export async function importInitialData() {
  try {
    console.log('Starting data import...');
    
    // Import clients
    const clientPromises = clientsData.map(async (client) => {
      const newClient = await createClient({
        name: client.name,
        phone: client.phone,
        email: client.email,
        address: client.address,
        birthdate: client.birthdate,
        notes: client.notes,
        last_purchase: client.lastPurchase,
        total_spent: client.totalSpent
      });
      
      // Import visits for this client
      if (client.visits && client.visits.length > 0) {
        for (const visit of client.visits) {
          await createVisit({
            client_id: newClient.id,
            date: visit.date,
            service: visit.service,
            value: visit.value
          });
        }
      }
      
      return newClient;
    });
    
    const clients = await Promise.all(clientPromises);
    console.log(`Imported ${clients.length} clients`);
    
    // Import professionals
    const professionalPromises = professionalsData.map(async (professional) => {
      return await createProfessional({
        name: professional.name,
        role: professional.role,
        color: professional.color
      });
    });
    
    const professionals = await Promise.all(professionalPromises);
    console.log(`Imported ${professionals.length} professionals`);
    
    // Import products
    const productPromises = productsData.map(async (product) => {
      return await createProduct({
        name: product.name,
        description: product.description,
        duration: product.duration,
        price: product.price,
        image: product.image
      });
    });
    
    const products = await Promise.all(productPromises);
    console.log(`Imported ${products.length} products`);
    
    // Import appointments
    const appointmentPromises = appointmentsData.map(async (appointment, index) => {
      // Map the client and professional IDs to the new ones
      const clientId = clients.find(c => c.name === appointment.clientName)?.id;
      const professionalId = professionals.find(p => p.name === professionalsData.find(pd => pd.id === appointment.professionalId)?.name)?.id;
      
      if (!clientId || !professionalId) {
        console.warn(`Skipping appointment ${index} due to missing client or professional`);
        return null;
      }
      
      return await createAppointment({
        client_id: clientId,
        professional_id: professionalId,
        service: appointment.service,
        day: appointment.day,
        start_hour: appointment.startHour,
        end_hour: appointment.endHour,
        price: appointment.price
      });
    });
    
    const appointments = await Promise.all(appointmentPromises.filter(Boolean));
    console.log(`Imported ${appointments.length} appointments`);
    
    console.log('Data import completed successfully!');
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
}
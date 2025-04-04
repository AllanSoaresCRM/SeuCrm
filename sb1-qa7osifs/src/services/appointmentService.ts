import { supabase } from '../lib/supabase';
import { Tables, Insertable, Updatable } from '../types/database.types';

export async function getAppointments() {
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      clients:client_id (name),
      professionals:professional_id (name, color)
    `);
  
  if (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
  
  return data;
}

export async function getAppointmentsByProfessional(professionalId: string) {
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      clients:client_id (name),
      professionals:professional_id (name, color)
    `)
    .eq('professional_id', professionalId);
  
  if (error) {
    console.error(`Error fetching appointments for professional ${professionalId}:`, error);
    throw error;
  }
  
  return data;
}

export async function createAppointment(appointment: Insertable<'appointments'>) {
  const { data, error } = await supabase
    .from('appointments')
    .insert(appointment)
    .select()
    .single();
  
  if (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
  
  return data;
}

export async function updateAppointment(id: string, appointment: Updatable<'appointments'>) {
  const { data, error } = await supabase
    .from('appointments')
    .update(appointment)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating appointment with id ${id}:`, error);
    throw error;
  }
  
  return data;
}

export async function deleteAppointment(id: string) {
  const { error } = await supabase
    .from('appointments')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting appointment with id ${id}:`, error);
    throw error;
  }
  
  return true;
}
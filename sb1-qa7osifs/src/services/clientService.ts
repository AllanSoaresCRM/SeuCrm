import { supabase } from '../lib/supabase';
import { Tables, Insertable, Updatable } from '../types/database.types';

export async function getClients() {
  const { data, error } = await supabase
    .from('clients')
    .select('*, visits(*)');
  
  if (error) {
    console.error('Error fetching clients:', error);
    throw error;
  }
  
  return data;
}

export async function getClientById(id: string) {
  const { data, error } = await supabase
    .from('clients')
    .select('*, visits(*)')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching client with id ${id}:`, error);
    throw error;
  }
  
  return data;
}

export async function createClient(client: Insertable<'clients'>) {
  const { data, error } = await supabase
    .from('clients')
    .insert(client)
    .select()
    .single();
  
  if (error) {
    console.error('Error creating client:', error);
    throw error;
  }
  
  return data;
}

export async function updateClient(id: string, client: Updatable<'clients'>) {
  const { data, error } = await supabase
    .from('clients')
    .update(client)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating client with id ${id}:`, error);
    throw error;
  }
  
  return data;
}

export async function deleteClient(id: string) {
  const { error } = await supabase
    .from('clients')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting client with id ${id}:`, error);
    throw error;
  }
  
  return true;
}
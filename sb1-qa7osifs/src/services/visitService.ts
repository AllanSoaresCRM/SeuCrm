import { supabase } from '../lib/supabase';
import { Tables, Insertable, Updatable } from '../types/database.types';

export async function getVisitsByClientId(clientId: string) {
  const { data, error } = await supabase
    .from('visits')
    .select('*')
    .eq('client_id', clientId);
  
  if (error) {
    console.error(`Error fetching visits for client ${clientId}:`, error);
    throw error;
  }
  
  return data;
}

export async function createVisit(visit: Insertable<'visits'>) {
  const { data, error } = await supabase
    .from('visits')
    .insert(visit)
    .select()
    .single();
  
  if (error) {
    console.error('Error creating visit:', error);
    throw error;
  }
  
  return data;
}

export async function updateVisit(id: string, visit: Updatable<'visits'>) {
  const { data, error } = await supabase
    .from('visits')
    .update(visit)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating visit with id ${id}:`, error);
    throw error;
  }
  
  return data;
}

export async function deleteVisit(id: string) {
  const { error } = await supabase
    .from('visits')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting visit with id ${id}:`, error);
    throw error;
  }
  
  return true;
}
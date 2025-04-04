import { supabase } from '../lib/supabase';
import { Tables, Insertable, Updatable } from '../types/database.types';

export async function getProfessionals() {
  const { data, error } = await supabase
    .from('professionals')
    .select('*');
  
  if (error) {
    console.error('Error fetching professionals:', error);
    throw error;
  }
  
  return data;
}

export async function getProfessionalById(id: string) {
  const { data, error } = await supabase
    .from('professionals')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) {
    console.error(`Error fetching professional with id ${id}:`, error);
    throw error;
  }
  
  return data;
}

export async function createProfessional(professional: Insertable<'professionals'>) {
  const { data, error } = await supabase
    .from('professionals')
    .insert(professional)
    .select()
    .single();
  
  if (error) {
    console.error('Error creating professional:', error);
    throw error;
  }
  
  return data;
}

export async function updateProfessional(id: string, professional: Updatable<'professionals'>) {
  const { data, error } = await supabase
    .from('professionals')
    .update(professional)
    .eq('id', id)
    .select()
    .single();
  
  if (error) {
    console.error(`Error updating professional with id ${id}:`, error);
    throw error;
  }
  
  return data;
}

export async function deleteProfessional(id: string) {
  const { error } = await supabase
    .from('professionals')
    .delete()
    .eq('id', id);
  
  if (error) {
    console.error(`Error deleting professional with id ${id}:`, error);
    throw error;
  }
  
  return true;
}
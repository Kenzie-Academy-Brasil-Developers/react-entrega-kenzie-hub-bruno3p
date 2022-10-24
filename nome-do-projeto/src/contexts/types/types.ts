export interface iApiError {
  error: string;
}

export interface iTechslist {
  id: any;
  
 
  title: string;
  status: string;
  
  
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  techs: iTechslist[];
  works: [];
  avatar_url: null;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

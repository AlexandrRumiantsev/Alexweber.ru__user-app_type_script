export interface Project {
    id: number;
    name: string;
    discr: string;
    fullimg: string;
    price: string;
    previmg: string;
    url: string;
  }

  function isProject(obj: any): obj is Project {
    return obj.id !== undefined 
  }

  const a: Project = { id: "abc" };

  isProject(a);
  

// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePerson = `subscription OnCreatePerson {
  onCreatePerson {
    id
    email
    name
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdatePerson = `subscription OnUpdatePerson {
  onUpdatePerson {
    id
    email
    name
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeletePerson = `subscription OnDeletePerson {
  onDeletePerson {
    id
    email
    name
    projects {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onCreateProject = `subscription OnCreateProject {
  onCreateProject {
    id
    name
    status
    message
    squadMates {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onUpdateProject = `subscription OnUpdateProject {
  onUpdateProject {
    id
    name
    status
    message
    squadMates {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onDeleteProject = `subscription OnDeleteProject {
  onDeleteProject {
    id
    name
    status
    message
    squadMates {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const onCreateProjectMembership = `subscription OnCreateProjectMembership {
  onCreateProjectMembership {
    id
    person {
      id
      email
      name
      projects {
        nextToken
      }
    }
    project {
      id
      name
      status
      message
      squadMates {
        nextToken
      }
    }
  }
}
`;
export const onUpdateProjectMembership = `subscription OnUpdateProjectMembership {
  onUpdateProjectMembership {
    id
    person {
      id
      email
      name
      projects {
        nextToken
      }
    }
    project {
      id
      name
      status
      message
      squadMates {
        nextToken
      }
    }
  }
}
`;
export const onDeleteProjectMembership = `subscription OnDeleteProjectMembership {
  onDeleteProjectMembership {
    id
    person {
      id
      email
      name
      projects {
        nextToken
      }
    }
    project {
      id
      name
      status
      message
      squadMates {
        nextToken
      }
    }
  }
}
`;

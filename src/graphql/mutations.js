// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPerson = `mutation CreatePerson($input: CreatePersonInput!) {
  createPerson(input: $input) {
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
export const updatePerson = `mutation UpdatePerson($input: UpdatePersonInput!) {
  updatePerson(input: $input) {
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
export const deletePerson = `mutation DeletePerson($input: DeletePersonInput!) {
  deletePerson(input: $input) {
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
export const createProject = `mutation CreateProject($input: CreateProjectInput!) {
  createProject(input: $input) {
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
export const updateProject = `mutation UpdateProject($input: UpdateProjectInput!) {
  updateProject(input: $input) {
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
export const deleteProject = `mutation DeleteProject($input: DeleteProjectInput!) {
  deleteProject(input: $input) {
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
export const createProjectMembership = `mutation CreateProjectMembership($input: CreateProjectMembershipInput!) {
  createProjectMembership(input: $input) {
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
export const updateProjectMembership = `mutation UpdateProjectMembership($input: UpdateProjectMembershipInput!) {
  updateProjectMembership(input: $input) {
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
export const deleteProjectMembership = `mutation DeleteProjectMembership($input: DeleteProjectMembershipInput!) {
  deleteProjectMembership(input: $input) {
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

// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPerson = `query GetPerson($id: ID!) {
  getPerson(id: $id) {
    id
    email
    name
    missions {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const listPersons = `query ListPersons(
  $filter: ModelPersonFilterInput
  $limit: Int
  $nextToken: String
) {
  listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      name
      missions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProject = `query GetProject($id: ID!) {
  getProject(id: $id) {
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
export const listProjects = `query ListProjects(
  $filter: ModelProjectFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      message
      squadMates {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getProjectMembership = `query GetProjectMembership($id: ID!) {
  getProjectMembership(id: $id) {
    id
    person {
      id
      email
      name
      missions {
        nextToken
      }
    }
    mission {
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
export const listProjectMemberships = `query ListProjectMemberships(
  $filter: ModelProjectMembershipFilterInput
  $limit: Int
  $nextToken: String
) {
  listProjectMemberships(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      person {
        id
        email
        name
      }
      mission {
        id
        name
        status
        message
      }
    }
    nextToken
  }
}
`;

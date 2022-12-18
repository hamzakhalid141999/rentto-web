/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateListing = /* GraphQL */ `
  subscription OnCreateListing($filter: ModelSubscriptionListingFilterInput) {
    onCreateListing(filter: $filter) {
      id
      Name
      FeatureDescription
      Address
      Images
      AdLife
      AdLifeTier
      Price
      PropertyDescription
      userID
      PropertyDetails
      PropertySpecification
      lat
      long
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateListing = /* GraphQL */ `
  subscription OnUpdateListing($filter: ModelSubscriptionListingFilterInput) {
    onUpdateListing(filter: $filter) {
      id
      Name
      FeatureDescription
      Address
      Images
      AdLife
      AdLifeTier
      Price
      PropertyDescription
      userID
      PropertyDetails
      PropertySpecification
      lat
      long
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteListing = /* GraphQL */ `
  subscription OnDeleteListing($filter: ModelSubscriptionListingFilterInput) {
    onDeleteListing(filter: $filter) {
      id
      Name
      FeatureDescription
      Address
      Images
      AdLife
      AdLifeTier
      Price
      PropertyDescription
      userID
      PropertyDetails
      PropertySpecification
      lat
      long
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        userID
        chatroomID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        userID
        chatroomID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
      id
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      LastMessage {
        id
        text
        userID
        chatroomID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      image
      status
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      Listings {
        items {
          id
          Name
          FeatureDescription
          Address
          Images
          AdLife
          AdLifeTier
          Price
          PropertyDescription
          userID
          PropertyDetails
          PropertySpecification
          lat
          long
          createdAt
          updatedAt
        }
        nextToken
      }
      likeListings
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      image
      status
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      Listings {
        items {
          id
          Name
          FeatureDescription
          Address
          Images
          AdLife
          AdLifeTier
          Price
          PropertyDescription
          userID
          PropertyDetails
          PropertySpecification
          lat
          long
          createdAt
          updatedAt
        }
        nextToken
      }
      likeListings
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      image
      status
      Messages {
        items {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      Listings {
        items {
          id
          Name
          FeatureDescription
          Address
          Images
          AdLife
          AdLifeTier
          Price
          PropertyDescription
          userID
          PropertyDetails
          PropertySpecification
          lat
          long
          createdAt
          updatedAt
        }
        nextToken
      }
      likeListings
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        LastMessage {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        image
        status
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Listings {
          nextToken
        }
        likeListings
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        LastMessage {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        image
        status
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Listings {
          nextToken
        }
        likeListings
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        Messages {
          nextToken
        }
        users {
          nextToken
        }
        LastMessage {
          id
          text
          userID
          chatroomID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      user {
        id
        name
        image
        status
        Messages {
          nextToken
        }
        ChatRooms {
          nextToken
        }
        Listings {
          nextToken
        }
        likeListings
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

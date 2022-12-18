/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createListing = /* GraphQL */ `
  mutation CreateListing(
    $input: CreateListingInput!
    $condition: ModelListingConditionInput
  ) {
    createListing(input: $input, condition: $condition) {
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
export const updateListing = /* GraphQL */ `
  mutation UpdateListing(
    $input: UpdateListingInput!
    $condition: ModelListingConditionInput
  ) {
    updateListing(input: $input, condition: $condition) {
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
export const deleteListing = /* GraphQL */ `
  mutation DeleteListing(
    $input: DeleteListingInput!
    $condition: ModelListingConditionInput
  ) {
    deleteListing(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      text
      userID
      chatroomID
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
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
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
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
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
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

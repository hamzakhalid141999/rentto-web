// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Listing, ChatRoom, Message, User, UserChatRoom } = initSchema(schema);

export {
  Listing,
  ChatRoom,
  Message,
  User,
  UserChatRoom
};
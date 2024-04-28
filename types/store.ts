export interface AuthStateType {
  isAuth: boolean;
}

export interface ChatType {
  id: string;
  messages: string[];
}

export interface ChatStateType {
  chats: ChatType[];
}

export interface StoreStateType {
  auth: AuthStateType;
  chat: ChatStateType;
}

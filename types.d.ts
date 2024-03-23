type RegisterForm = {
  username?: string,
  email?: string,
  password?: string,
};

type LoginForm = {
  email: string,
  password: string,
}

type Board = {
  id: number;
  name: string;
  openAction: boolean;
  completeAction: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: string;
  tasks: Task[];
}

type Task = {
  id: number;
  createdUserId: number;
  name: string;
  description?: string;
  code: number;
  boardId: number;
  flagId: number;
  order: number;
  startDate?: string;
  endDate?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: string;
  deletedUserId?: string;
}

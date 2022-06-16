import { TaskModel } from '../models/task';

export function getTaskList(): Array<TaskModel> {
  return [
    {
      id: TaskModel.generateId(),
      title: 'Sobrevivir al incendio',
      responsible: 'Yo',
      isCompleted: false,
    },
    {
      id: TaskModel.generateId(),
      title: 'Entender los eventos de angular',
      responsible: 'Yo',
      isCompleted: false,
    },
    {
      id: TaskModel.generateId(),
      title: 'Sobrevivir a la maldicion del marinero',
      responsible: 'Yo',
      isCompleted: false,
    },
  ];
}

import { atom } from 'jotai';
import { Task } from './models/Task';
import { User } from './models/User';
import { Vehicle } from './models/Vehicle';

export const allTasksAtom = atom<Task[]>([]);
export const filteredTasksAtom = atom<Task[]>([]);
export const displayTasksAtom = atom<Task[]>([]);

export const allVehiclesAtom = atom<Record<number, Vehicle>>({})
export const vehicleIdToMVA = atom<Record<number, string>>({})
export const vehicleIdToLicense = atom<Record<number, string>>({})

export const currUserAtom = atom<User|null>(null);
export const allUsersAtom = atom<Record<number, User>>([]);

export const atomModalVisible = atom(false);
export const searchQueryAtom = atom<string>('')
export const sortFilterHeaderAtom = atom(false)

export const atomFilterOptions = atom<Record<string, any>>({
  'Market': ['Boston', 'Atlanta', 'Nashville', 'Charlotte'],
  'Task Type': [
    'Body damage/Collision',
    'Small dent/Scratch',
    'Glass chip',
    'Glass crack or scratch',
    'Tire pressure',
    'Low tread',
    'Tech',
    'Key issue',
    'Battery issue',
    'Check engine',
    'Mechanical issue',
    'Oil light on',
  ],
  'Make & Model': {},
  'Status': ['Open', 'Assigned', 'Resolved', 'Reopened'],
  'Priority': ['Low', 'Normal', 'High', 'Top'],
  'Quick View': [
    'Assigned to me',
    'All unassigned',
    'Recently opened',
    'Quick turn',
    'Older than 48hrs',
  ],
});
export const atomFilters = atom<Record<string, any>>({
  'Market': [],
  'Task Type': [],
  'Make & Model': {},
  'Status': [],
  'Priority': [],
  'Quick View': [],
});
export const atomSorts = atom('');

import { isEqual } from 'date-fns';

import Appointment from '../models/appointment';

export interface AppointmentDTOProps {
  provider: string;
  date: Date;
}

export class AppointmentRepository {
  private appointments: Appointment[] = [];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ provider, date }: AppointmentDTOProps): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }
}

export default AppointmentRepository;

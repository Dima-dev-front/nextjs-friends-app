import type { InvitationStatus } from './InvitationStatus';

export type Friend = {
  id: number;
  fullName: string;
  avatarSrc: string;
  invitationStatus: InvitationStatus;
  joinedOn?: string;
};

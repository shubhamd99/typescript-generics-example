import { MeetingResource } from "./meetingResource";
import { ConferenceRoom, conferenceRoomData } from "./conferenceRoom";

// extending interface to inherit properties of MeetingResource interface
// T --> MeetingResource object model interface
class Reservation<T extends MeetingResource> {
  reservationDate: Date;
  organizerName: string;
  resource: T;

  // you cannot use static on generic
  // i.e static requestResource()
  requestResource(requestedResource: T, requester: string) {
    this.resource = requestedResource;
    this.organizerName = requester;
    console.log(`${requester} requested a reservation ${requestedResource.name}`);
  }
}

let teamMeeting = new Reservation<ConferenceRoom>();
teamMeeting.requestResource(conferenceRoomData[0], 'Gary');
import { MeetingResource } from './models/meetingResource';
import { ConferenceRoom, conferenceRoomData } from './models/conferenceRoom';
import { PartyTent, partyTentData } from './models/partyTent';
import { Building, buildingData } from './models/building';

// Generic Functions
// T --> name, capacity
function getBigRooms<T extends MeetingResource>(rooms: Array<T>, minSize: number): Array<T> {
    let bigRooms: Array<T> = [];

    rooms.forEach(room => {
        if(room.capacity > minSize) {
            bigRooms.push(room);
        }
    });

    return bigRooms;
}

// Function Types
const getLargeRooms: <T extends MeetingResource>(rooms: Array<T>, minSize: number) => Array<T> = getBigRooms;
const largeRooms = getLargeRooms<ConferenceRoom>(conferenceRoomData, 30);

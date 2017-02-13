Attendee = function(service,messenger,attendeeId){
  if(!(this instanceof Attendee)){
    return new Attendee(attendeeId);
  };
  this.attendeeid=attendeeId;
  this.messenger=messenger;
  this.service=service;
}

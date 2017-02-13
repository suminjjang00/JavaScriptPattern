// Attendee(attendeeId);
Attendee = function(attendeeId){
  if(!(this instanceof Attendee)){
  return new Attendee(attendeeId);
}

// Attendee = function(attendeeId){
//   var attendeeId = attendeeId;
//   var service = new ConferenceWebSvc();
//   var messenger = new Messenger();
    // var reserver = function(sessionId){
    //   if(service.reserve(Attendee.attendeeId.sessionId)){
    //     Attendee.message.success('success..');
    //   }else{
    //     Attendee.messenger.failure('you are fail');
    //   }
    // }
// }
  this.attendeeId = atendeeId;
  this.service = new ConferenceWebSvc();
  this.messenger = new Messenger();
};

Attendee.prototype.reserve = function(sessionId){
  if(this.service.reserve(this.attendeeId,sessionId)){
    this.message.success('예약 성공'+this.service.getRemainingReservations())
  }else{
    this.messenger.failure('you are failure');
  }
}

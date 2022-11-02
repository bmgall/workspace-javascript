var text = {
    hotelname: "marriot",
    room: 350,
    booked: 120,
    display: function () {
        return this.hotelname;
    }

};

console.log(text.room);
console.log(text.hotelname);
console.log(text.display());
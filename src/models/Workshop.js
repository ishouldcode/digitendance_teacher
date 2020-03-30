class Workshop {
    constructor(id, name, date, expiryTime, secretKey) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.secretKey = secretKey;
        this.expiryTime = expiryTime;
        this.eventType = 'workshop';
    }
}

export default Workshop;
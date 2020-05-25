class Status {
  static async status(req, res) {
    res.status(200).json({ status: 'OK' });
  }
}

module.exports = Status;
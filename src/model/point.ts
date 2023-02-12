class Point {}
class PointChangeAction {
  /**
   * The student ID of the subject whose point was changed.
   */
  subjectID: String;
  /**
   * The student ID of the operator who perform this change.
   */
  operatorID: String;
  before: number;
  after: number;
  constructor(
    subject: String,
    operator: String,
    before: number,
    after: number
  ) {
    this.subjectID = subject;
    this.operatorID = operator;
    this.before = before;
    this.after = after;
  }
}

const studentModel = require("../models/studentModel");
const getNextStudentID = async (req, res) => {
  try {
    const results = await studentModel.getLastStudentID();
    let nextID = "STD001";
    if (results.length > 0) {
      let lastStdID = results[0].stdID;
      let currentNum = parseInt(lastStdID.replace("STD", ""));
      currentNum++;
      nextID = "STD" + currentNum.toString().padStart(3, "0");
    }
    res.json({ nextStudentID: nextID });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving students data" });
  }
};

const addStudent = async (req, res) => {
  const {
    studentID,
    studentName,
    studentLastname,
    gender,
    tel,
    phone,
    school,
    district,
    stayID,
  } = req.body;

  try {
    if ((gender === "1" || gender === "3") && stayID === "2") {
      const count = await studentModel.countMaleInStay2();
      if (count >= 150) {
        return res.status(400).send({ message: "Male dorm full" });
      }
    }

    if (gender === "2" && stayID === "2") {
      const count = await studentModel.countFeMaleInStay2();
      if (count >= 80) {
        return res.status(400).send({ message: "FeMale dorm full" });
      }
    }

    await studentModel.addStudent(
      studentID,
      studentName,
      studentLastname,
      gender,
      tel,
      phone,
      school,
      district,
      stayID
    );
    res.status(200).send({ message: "Student added successfully!" });
  } catch (err) {
    console.error("Error inserting student data: ", err);
    res.status(500).send({ message: "Error inserting student data" });
  }
};

module.exports = { getNextStudentID, addStudent };

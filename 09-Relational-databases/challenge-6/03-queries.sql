-- ============================================================
-- HOSPITAL MANAGEMENT SYSTEM
-- ADVANCED SQL QUERIES - SOLUTIONS
-- ============================================================

-- ============================================================
-- QUERY 01
-- Display patients who have at least one appointment.
-- ============================================================
 
SELECT DISTINCT
    p.id_patient,
    a.id_appointment,
    p.first_name_patient,
    p.last_name_patient,
    p.email_patient
FROM patient AS p
INNER JOIN appointment AS a
    ON a.patient_id_appointment = p.id_patient
ORDER BY p.id_patient;
 
 
-- ============================================================
-- QUERY 02
-- Display each doctor and their total number of appointments.
-- ============================================================
 
SELECT
    d.id_doctor,
    d.first_name_doctor,
    d.last_name_doctor,
    s.name_specialty,
    COUNT(a.id_appointment) AS total_appointments
FROM doctor AS d
INNER JOIN specialty AS s
    ON s.id_specialty = d.specialty_doctor
LEFT JOIN appointment AS a
    ON a.doctor_id_appointment = d.id_doctor
GROUP BY
    d.id_doctor,
    d.first_name_doctor,
    d.last_name_doctor,
    s.name_specialty
ORDER BY total_appointments DESC;
 
 
-- ============================================================
-- QUERY 03
-- Patients with more appointments than the average per patient.
-- ============================================================
 
SELECT
    p.id_patient,
    p.first_name_patient,
    p.last_name_patient,
    COUNT(a.id_appointment) AS total_appointments
FROM patient AS p
INNER JOIN appointment AS a
    ON a.patient_id_appointment = p.id_patient
GROUP BY
    p.id_patient,
    p.first_name_patient,
    p.last_name_patient
HAVING COUNT(a.id_appointment) > (
    SELECT AVG(appointment_count)
    FROM (
        SELECT
            p2.id_patient,
            COUNT(a2.id_appointment) AS appointment_count
        FROM patient AS p2
        LEFT JOIN appointment AS a2
            ON a2.patient_id_appointment = p2.id_patient
        GROUP BY p2.id_patient
    ) AS patient_totals
);
 
 
-- ============================================================
-- QUERY 04
-- Doctors who have attended at least one completed appointment.
-- ============================================================
 
SELECT DISTINCT
    d.id_doctor,
    d.first_name_doctor,
    d.last_name_doctor
FROM doctor AS d
INNER JOIN appointment AS a
    ON a.doctor_id_appointment = d.id_doctor
INNER JOIN catalog_status AS cs
    ON cs.id_c_status = a.status_appointment
WHERE cs.name_c_status = 'Completed'
ORDER BY d.id_doctor;
 
 
-- ============================================================
-- QUERY 05
-- Patients who have never had a cancelled appointment.
-- ============================================================
 
SELECT
    p.id_patient,
    p.first_name_patient,
    p.last_name_patient
FROM patient AS p
WHERE NOT EXISTS (
    SELECT 1
    FROM appointment AS a
    INNER JOIN catalog_status AS cs
        ON cs.id_c_status = a.status_appointment
    WHERE a.patient_id_appointment = p.id_patient
      AND cs.name_c_status = 'Cancelled'
)
ORDER BY p.id_patient;
 
 
-- ============================================================
-- QUERY 06
-- Patients who have more than one appointment.
-- ============================================================
 
SELECT
    p.id_patient,
    p.first_name_patient,
    p.last_name_patient,
    COUNT(a.id_appointment) AS total_appointments
FROM patient AS p
INNER JOIN appointment AS a
    ON a.patient_id_appointment = p.id_patient
GROUP BY
    p.id_patient,
    p.first_name_patient,
    p.last_name_patient
HAVING COUNT(a.id_appointment) > 1
ORDER BY total_appointments DESC;
 
 
-- ============================================================
-- QUERY 07
-- Doctor or doctors with the highest number of appointments.
-- ============================================================
 
SELECT
    d.id_doctor,
    d.first_name_doctor,
    d.last_name_doctor,
    COUNT(a.id_appointment) AS total_appointments
FROM doctor AS d
INNER JOIN appointment AS a
    ON a.doctor_id_appointment = d.id_doctor
GROUP BY
    d.id_doctor,
    d.first_name_doctor,
    d.last_name_doctor
HAVING COUNT(a.id_appointment) = (
    SELECT MAX(doctor_total)
    FROM (
        SELECT COUNT(*) AS doctor_total
        FROM appointment
        GROUP BY doctor_id_appointment
    ) AS doctor_counts
);
 
 
-- ============================================================
-- QUERY 08
-- Display complete appointment information.
-- ============================================================
SELECT
	a.id_appointment,
	a.date_appointment,
	a.time_appointment,
	CONCAT(	p.first_name_patient, ' ', p.last_name_patient) AS patient_name,
	CONCAT(	d.first_name_doctor, ' ', d.last_name_doctor) AS doctor_name,
	s.name_specialty AS specialty,
	cs.name_c_status AS appointment_status,
	cd.name_c_diagnosis AS diagnosis,
	ct.name_c_treatment AS treatment,
	r.number_room,
	a.notes_appointment
FROM appointment AS a
INNER JOIN patient AS p
	ON p.id_patient = a.patient_id_appointment
INNER JOIN doctor AS d
	ON d.id_doctor = a.doctor_id_appointment
INNER JOIN specialty AS s
	ON s.id_specialty = d.specialty_doctor
INNER JOIN catalog_status AS cs
	ON cs.id_c_status = a.status_appointment
INNER JOIN catalog_diagnosis AS cd
	ON cd.id_c_diagnosis = a.diagnosis_appointment
INNER JOIN catalog_treatment AS ct
	ON ct.id_c_treatment = a.treatment_appointment
INNER JOIN room AS r
	ON r.id_room = a.room_appointment
ORDER BY a.date_appointment, a.time_appointment;
 
 
-- ============================================================
-- QUERY 09
-- Patients who have an appointment with a Cardiology doctor.
-- ============================================================
 
SELECT DISTINCT
    p.id_patient,
    p.first_name_patient,
    p.last_name_patient
FROM patient AS p
INNER JOIN appointment AS a
    ON a.patient_id_appointment = p.id_patient
INNER JOIN doctor AS d
    ON d.id_doctor = a.doctor_id_appointment
INNER JOIN specialty AS s
    ON s.id_specialty = d.specialty_doctor
WHERE s.name_specialty = 'Cardiology'
ORDER BY p.id_patient;
 
 
-- ============================================================
-- QUERY 10
-- Diagnoses used in completed appointments and their frequency.
-- ============================================================
 
SELECT
    cd.id_c_diagnosis,
    cd.name_c_diagnosis,
    COUNT(a.id_appointment) AS total_completed
FROM catalog_diagnosis AS cd
INNER JOIN appointment AS a
    ON a.diagnosis_appointment = cd.id_c_diagnosis
INNER JOIN catalog_status AS cs
    ON cs.id_c_status = a.status_appointment
WHERE cs.name_c_status = 'Completed'
GROUP BY
    cd.id_c_diagnosis,
    cd.name_c_diagnosis
ORDER BY total_completed DESC;
 
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Error: Doctor dropdown (AppPatientData.AppDoctorModalityID) never populated

expect(received).toBeGreaterThan(expected)

Expected: > 1
Received:   1

Call Log:
- Timeout 10000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner:
      - text:  
      - navigation [ref=e3]:
        - generic [ref=e4]:
          - heading "Registration" [level=1] [ref=e6]
          - list [ref=e8]:
            - listitem [ref=e9]:
              - generic [ref=e10]: "Welcome: Employee 1338:(KPJ)"
            - listitem [ref=e11]:
              - generic [ref=e12]: "Last Login : 20/05/2026 01:42:38"
            - listitem [ref=e13]:
              - link " 279" [ref=e15] [cursor=pointer]:
                - /url: "#/InternalMessaging"
                - generic [ref=e16]: 
                - generic [ref=e17]: "279"
              - button "Mic On/Off" [ref=e19] [cursor=pointer]
              - img "Change Password" [ref=e22]
              - generic "Logout" [ref=e24]:
                - generic [ref=e25]: 
    - navigation [ref=e26]:
      - list [ref=e31]:
        - listitem [ref=e32]:
          - link [ref=e33] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e34]:
          - link "Home" [ref=e35] [cursor=pointer]:
            - /url: "#/home"
            - generic [ref=e36]: Home
        - listitem [ref=e37]:
          - link "Emergency" [ref=e38] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e39]: Emergency
        - listitem [ref=e40]:
          - link "OP" [ref=e41] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e42]: OP
          - text:                
        - listitem [ref=e43]:
          - link "IP" [ref=e44] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e45]: IP
        - listitem [ref=e46]:
          - link "Finance" [ref=e47] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e48]: Finance
        - listitem [ref=e49]:
          - link "Billing" [ref=e50] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e51]: Billing
        - listitem [ref=e52]:
          - link "Investigation" [ref=e53] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e54]: Investigation
        - listitem [ref=e55]:
          - link "Nursing Station" [ref=e56] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e57]: Nursing Station
        - listitem [ref=e58]:
          - link "OT" [ref=e59] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e60]: OT
        - listitem [ref=e61]:
          - link "Inventory" [ref=e62] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e63]: Inventory
        - listitem [ref=e64]:
          - link "Ancillary Services" [ref=e65] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e66]: Ancillary Services
        - listitem [ref=e67]:
          - link "Report" [ref=e68] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e69]: Report
        - listitem [ref=e70]:
          - link "System Configuration" [ref=e71] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e72]: System Configuration
        - listitem [ref=e73]:
          - link "Application Configuration" [ref=e74] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e75]: Application Configuration
        - listitem [ref=e76]:
          - link "Telemedicine" [ref=e77] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e78]: Telemedicine
    - generic [ref=e85]:
      - generic [ref=e87]:
        - tablist [ref=e88]:
          - generic [ref=e89]:
            - tab "Patient Information" [ref=e90]:
              - button "Patient Information" [ref=e91] [cursor=pointer]
              - button
            - text:             
        - generic [ref=e92]:
          - tab "Payor Information" [ref=e93]:
            - button "Payor Information" [ref=e94] [cursor=pointer]
          - text:    
        - text:  
      - generic [ref=e95]:
        - tab "Visit Information" [ref=e96]:
          - button "Visit Information" [expanded] [ref=e97] [cursor=pointer]
        - tabpanel "Visit Information" [ref=e98]:
          - generic [ref=e101]:
            - generic [ref=e102]:
              - generic [ref=e104]:
                - generic [ref=e105]: Episode No
                - textbox [ref=e107]
              - generic [ref=e109]:
                - generic [ref=e110]: Time
                - textbox [ref=e112]: 11:12 PM
              - generic [ref=e114]:
                - generic [ref=e115]: Encounter Type*
                - combobox [ref=e117]:
                  - option "--Select--"
                  - option "Outpatient" [selected]
              - generic [ref=e119]:
                - generic [ref=e120]: Cash Counter*
                - combobox [ref=e122]:
                  - option "--Select--"
                  - option "ADM5-C-01 (Ward Level 5)" [selected]
                  - option "ADM6-C-01 (Ward Level 6)"
                  - option "ADM7-C-01 (Ward Level 7)"
                  - option "ADMG-C-01 (Central)"
                  - option "ADMG-C-02 (Central)"
                  - option "ADMG-C-03 (Central)"
                  - option "ADMG-C-04 (Central)"
                  - option "ADMG-C-05 (Central)"
                  - option "ADMG-C-06 (Central)"
                  - option "ADMG-E-01 (Central)"
                  - option "ADMG-S-01 (Central)"
                  - option "ADMG-S-02 (Central)"
                  - option "BILL-BL01 (IP Billing)"
                  - option "BILL-BL02 (IP Billing)"
                  - option "BILL-BL03 (IP Billing)"
                  - option "BILL-BL04 (IP Billing)"
                  - option "BILL-BL05 (IP Billing)"
                  - option "BILL-BL06 (IP Billing)"
                  - option "BILL-BL07 (IP Billing)"
                  - option "CC-CC01 (Credit Control)"
                  - option "CC-CC02 (Credit Control)"
                  - option "CC-CC03 (Credit Control)"
                  - option "CC-CC04 (Credit Control)"
                  - option "CC-CC05 (Credit Control)"
                  - option "CC-CC06 (Credit Control)"
                  - option "CC-CC07 (Credit Control)"
                  - option "DCL1-C-01 (Daycare)"
                  - option "DCL1-C-02 (Daycare)"
                  - option "DCL1-C-03 (Daycare)"
                  - option "DCL1-C-04 (Daycare)"
                  - option "DC-O-01 (Daycare)"
                  - option "DCOC-C-01 (Daycare (Oncology) )"
                  - option "DCOC-C-02 (Daycare (Oncology) )"
                  - option "ED-C-01 (Emergency)"
                  - option "ED-C-02 (Emergency)"
                  - option "ED-C-03 (Emergency)"
                  - option "ED-E-01 (Emergency)"
                  - option "ED-S-01 (Emergency)"
                  - option "HSD-C-01 (HSD)"
                  - option "OPD-B-01 (Outpatient)"
                  - option "OPD-B-02 (Outpatient)"
                  - option "OPD-B-03 (Outpatient)"
                  - option "OPD-B-04 (Outpatient)"
                  - option "OPD-E-01 (Outpatient)"
                  - option "OPD-E-02 (Outpatient)"
                  - option "RAD-C-01 (Imaging)"
                  - option "REHB-C-01 (Rehab)"
                  - option "REHB-C-02 (Rehab)"
                  - option "SH-C-01 (Emergency (Staff Health) )"
                  - option "SP10-C-01 (SPC10/11 (Paeds))"
                  - option "SP10-C-02 (SPC10/11 (Paeds))"
                  - option "SP10-C-03 (SPC10/11 (Paeds))"
                  - option "SP12-C-01 (SPC12)"
                  - option "SP12-C-02 (SPC12)"
                  - option "SP12-C-03 (SPC12)"
                  - option "SP12-C-04 (SPC12)"
                  - option "SP13-C-01 (SPC13A)"
                  - option "SP13-C-02 (SPC13A)"
                  - option "SPC1-C-01 (SPC1 (Onco))"
                  - option "SPC1-C-02 (SPC1 (Onco))"
                  - option "SPC2-C-01 (SPC2)"
                  - option "SPC2-C-02 (SPC2)"
                  - option "SPC3-C-01 (SPC3)"
                  - option "SPC3-C-02 (SPC3)"
                  - option "SPC3-C-03 (SPC3)"
                  - option "SPC3-C-04 (SPC3)"
                  - option "SPC5-C-01 (SPC5)"
                  - option "SPC5-C-02 (SPC5)"
                  - option "SPC6-C-01 (SPC6)"
                  - option "SPC6-C-02 (SPC6)"
                  - option "SPC6-C-03 (SPC6)"
                  - option "SPC7-C-01 (SPC7)"
                  - option "SPC7-C-02 (SPC7)"
                  - option "SPC8-C-01 (SPC8)"
                  - option "SPC8-C-02 (SPC8)"
                  - option "SPC8-C-03 (SPC8)"
                  - option "SPC9-C-01 (SPC9 (IVF))"
                  - option "SPC9-C-02 (SPC9 (IVF))"
                  - option "SPC9-C-03 (SPC9 (IVF))"
                  - option "SPC9-C-04 (SPC9 (IVF))"
                  - option "SPC9-C-05 (SPC9 (IVF))"
              - generic [ref=e124]:
                - generic [ref=e125]: Location*
                - combobox [disabled] [ref=e127]:
                  - option "--Select--"
                  - option "KPJ" [selected]
              - generic [ref=e129]:
                - generic [ref=e130]: Registration Department*
                - combobox [ref=e132]:
                  - option "--Select--" [selected]
                  - option "Anaesthesiology & Critical Care"
                  - option "Anatomical Pathology"
                  - option "Breast & Endocrine Surgery"
                  - option "Breast & Oncoplastic Surgery"
                  - option "Cardiology"
                  - option "Cardiothoracic Surgery"
                  - option "Cardiothoracic Surgery (Paediatric)"
                  - option "Chemical Pathology"
                  - option "Clinical Haematology"
                  - option "Clinical Oncology"
                  - option "Colorectal Surgery"
                  - option "Daycare"
                  - option "Dermatology"
                  - option "Dietetics"
                  - option "Ear, Nose & Throat Surgery"
                  - option "Endocrinology"
                  - option "Gastroenterology & Hepatology"
                  - option "General Paediatric & Paediatric Dermatology"
                  - option "General Paediatric & Paediatric Endocrinology"
                  - option "General Paediatrics"
                  - option "General Paediatrics & Clinical Genetics"
                  - option "General Paediatrics & Paediatric Cardiology"
                  - option "General Paediatrics & Paediatric Gastroenterology & Hepatology"
                  - option "General Paediatrics & Paediatric Neurology"
                  - option "General Surgery"
                  - option "Geriatric Medicine"
                  - option "Haematopathology"
                  - option "Haemodalysis"
                  - option "Hand & Microsurgery (Orthopaedic)"
                  - option "Health Screening Centre"
                  - option "Hepatobiliary Surgery"
                  - option "Infectious Diseases"
                  - option "Intensive Care & Internal Medicine"
                  - option "Internal Medicine"
                  - option "Laboratory"
                  - option "Neonatology"
                  - option "Nephrology"
                  - option "Neurology"
                  - option "Neuropsychology"
                  - option "Neurosurgery"
                  - option "Nuclear Medicine"
                  - option "Obstetrics & Gynaecology"
                  - option "Obstetrics & Gynaecology, Fertility"
                  - option "Obstetrics & Gynaecology, Gynae-Oncology"
                  - option "Obstetrics & Gynaecology, Maternal Fetal"
                  - option "Oncology"
                  - option "Ophthalmology"
                  - option "Oral & Maxillofacial Surgery"
                  - option "Orthopaedic Surgery"
                  - option "Paediatric Surgery"
                  - option "Palliative Medicine"
                  - option "Pathology"
                  - option "Plastic & Reconstructive Surgery"
                  - option "Psychiatry"
                  - option "Radiology"
                  - option "Rehab & Physiotherapy"
                  - option "Rehabilitation Medicine"
                  - option "Resident Medical Officer"
                  - option "Respiratory Medicine"
                  - option "Rheumatology"
                  - option "Sonographer"
                  - option "Sport Medicine"
                  - option "Upper Gastrointestinal & Bariatric Surgery"
                  - option "Upper Gastrointestinal Surgery"
                  - option "Urology"
                  - option "Vascular Surgery"
              - generic [ref=e134]:
                - generic [ref=e135]: Cluster
                - combobox [ref=e137]:
                  - option "-Select-" [selected]
                  - option "N/A"
                  - option "SPC1"
                  - option "SPC10"
                  - option "SPC11"
                  - option "SPC12"
                  - option "SPC13A"
                  - option "SPC2"
                  - option "SPC3"
                  - option "SPC5"
                  - option "SPC6"
                  - option "SPC7"
                  - option "SPC8"
                  - option "SPC9"
              - generic [ref=e139]:
                - generic [ref=e140]: Sub Dept
                - combobox [disabled] [ref=e142]:
                  - option "--Select--" [selected]
              - generic [ref=e144]:
                - generic [ref=e145]: Primary Doctor*
                - combobox [ref=e147]:
                  - option "--Select--" [selected]
                  - option "A"
                  - option "ABC"
                  - option "Allen R"
                  - option "Aron F"
                  - option "Chong Kuoh Ren"
                  - option "Cluster Adem"
                  - option "Demo Doctor"
                  - option "Dj"
                  - option "Doctor 1"
                  - option "Doctor 10"
                  - option "Doctor 100"
                  - option "Doctor 101"
                  - option "Doctor 102"
                  - option "Doctor 103"
                  - option "Doctor 104"
                  - option "Doctor 105"
                  - option "Doctor 106"
                  - option "Doctor 107"
                  - option "Doctor 108"
                  - option "Doctor 109"
                  - option "Doctor 11"
                  - option "Doctor 110"
                  - option "Doctor 111"
                  - option "Doctor 112"
                  - option "Doctor 113"
                  - option "Doctor 114"
                  - option "Doctor 115"
                  - option "Doctor 116"
                  - option "Doctor 117"
                  - option "Doctor 118"
                  - option "Doctor 119"
                  - option "Doctor 12"
                  - option "Doctor 120"
                  - option "Doctor 121"
                  - option "Doctor 122"
                  - option "Doctor 123"
                  - option "Doctor 124"
                  - option "Doctor 125"
                  - option "Doctor 126"
                  - option "Doctor 127"
                  - option "Doctor 128"
                  - option "Doctor 129"
                  - option "Doctor 13"
                  - option "Doctor 130"
                  - option "Doctor 131"
                  - option "Doctor 132"
                  - option "Doctor 133"
                  - option "Doctor 134"
                  - option "Doctor 135"
                  - option "Doctor 136"
                  - option "Doctor 137"
                  - option "Doctor 138"
                  - option "Doctor 139"
                  - option "Doctor 14"
                  - option "Doctor 140"
                  - option "Doctor 141"
                  - option "Doctor 142"
                  - option "Doctor 143"
                  - option "Doctor 144"
                  - option "Doctor 145"
                  - option "Doctor 146"
                  - option "Doctor 147"
                  - option "Doctor 148"
                  - option "Doctor 149"
                  - option "Doctor 15"
                  - option "Doctor 150"
                  - option "Doctor 151"
                  - option "Doctor 152"
                  - option "Doctor 153"
                  - option "Doctor 154"
                  - option "Doctor 155"
                  - option "Doctor 156"
                  - option "Doctor 157"
                  - option "Doctor 158"
                  - option "Doctor 159"
                  - option "Doctor 16"
                  - option "Doctor 160"
                  - option "Doctor 161"
                  - option "Doctor 162"
                  - option "Doctor 163"
                  - option "Doctor 164"
                  - option "Doctor 165"
                  - option "Doctor 166"
                  - option "Doctor 167"
                  - option "Doctor 168"
                  - option "Doctor 169"
                  - option "Doctor 17"
                  - option "Doctor 170"
                  - option "Doctor 171"
                  - option "Doctor 172"
                  - option "Doctor 173"
                  - option "Doctor 174"
                  - option "Doctor 175"
                  - option "Doctor 176"
                  - option "Doctor 177"
                  - option "Doctor 178"
                  - option "Doctor 179"
                  - option "Doctor 18"
                  - option "Doctor 180"
                  - option "Doctor 181"
                  - option "Doctor 182"
                  - option "Doctor 183"
                  - option "Doctor 184"
                  - option "Doctor 185"
                  - option "Doctor 186"
                  - option "Doctor 187"
                  - option "Doctor 188"
                  - option "Doctor 189"
                  - option "Doctor 19"
                  - option "Doctor 190"
                  - option "Doctor 191"
                  - option "Doctor 192"
                  - option "Doctor 193"
                  - option "Doctor 194"
                  - option "Doctor 195"
                  - option "Doctor 196"
                  - option "Doctor 197"
                  - option "Doctor 198"
                  - option "Doctor 199"
                  - option "Doctor 2"
                  - option "Doctor 20"
                  - option "Doctor 200"
                  - option "Doctor 201"
                  - option "Doctor 202"
                  - option "Doctor 203"
                  - option "Doctor 204"
                  - option "Doctor 205"
                  - option "Doctor 206"
                  - option "Doctor 207"
                  - option "Doctor 208"
                  - option "Doctor 209"
                  - option "Doctor 21"
                  - option "Doctor 210"
                  - option "Doctor 211"
                  - option "Doctor 212"
                  - option "Doctor 213 TIEBA"
                  - option "Doctor 22"
                  - option "Doctor 23"
                  - option "Doctor 24"
                  - option "Doctor 25"
                  - option "Doctor 26"
                  - option "Doctor 27"
                  - option "Doctor 28"
                  - option "Doctor 29"
                  - option "Doctor 3"
                  - option "Doctor 30"
                  - option "Doctor 31"
                  - option "Doctor 32"
                  - option "Doctor 33"
                  - option "Doctor 34"
                  - option "Doctor 35"
                  - option "Doctor 36"
                  - option "Doctor 37"
                  - option "Doctor 38"
                  - option "Doctor 39"
                  - option "Doctor 4"
                  - option "Doctor 40"
                  - option "Doctor 41"
                  - option "Doctor 42"
                  - option "Doctor 43"
                  - option "Doctor 44"
                  - option "Doctor 45"
                  - option "Doctor 46"
                  - option "Doctor 47"
                  - option "Doctor 48"
                  - option "Doctor 49"
                  - option "Doctor 5"
                  - option "Doctor 50"
                  - option "Doctor 51"
                  - option "Doctor 52"
                  - option "Doctor 521"
                  - option "Doctor 53"
                  - option "Doctor 54"
                  - option "Doctor 55"
                  - option "Doctor 56"
                  - option "Doctor 58"
                  - option "Doctor 59"
                  - option "Doctor 6"
                  - option "Doctor 60"
                  - option "Doctor 61"
                  - option "Doctor 62"
                  - option "Doctor 63"
                  - option "Doctor 64"
                  - option "Doctor 65"
                  - option "Doctor 66"
                  - option "Doctor 67"
                  - option "Doctor 68"
                  - option "Doctor 69"
                  - option "Doctor 7"
                  - option "Doctor 70"
                  - option "Doctor 71"
                  - option "Doctor 72"
                  - option "Doctor 73"
                  - option "Doctor 74"
                  - option "Doctor 75"
                  - option "Doctor 76"
                  - option "Doctor 77"
                  - option "Doctor 78"
                  - option "Doctor 79"
                  - option "Doctor 8"
                  - option "Doctor 80"
                  - option "Doctor 81"
                  - option "Doctor 82"
                  - option "Doctor 83"
                  - option "Doctor 84"
                  - option "Doctor 85"
                  - option "Doctor 86"
                  - option "Doctor 87"
                  - option "Doctor 88"
                  - option "Doctor 89"
                  - option "Doctor 9"
                  - option "Doctor 90"
                  - option "Doctor 91"
                  - option "Doctor 92"
                  - option "Doctor 93"
                  - option "Doctor 94"
                  - option "Doctor 95"
                  - option "Doctor 96"
                  - option "Doctor 97"
                  - option "Doctor 98"
                  - option "Doctor 99"
                  - option "Doctor Aisya"
                  - option "Doctor hayati"
                  - option "Doctor_Amrita"
                  - option "Doctor_Annie"
                  - option "Doctor_Fikry"
                  - option "Doctor_Firdaus"
                  - option "Doctor_Kabir"
                  - option "Doctor_Natasha"
                  - option "Doctor_Pornima"
                  - option "Doctor_Pornima"
                  - option "Doctor_Raihan"
                  - option "Doctor_Shantanu"
                  - option "Doctor_Shantanu"
                  - option "Doctor_Tieba"
                  - option "Dummylab"
                  - option "DummyRadiology"
                  - option "Employee 71"
                  - option "Henry Mathews"
                  - option "Ilham Bin Sirayuddin"
                  - option "keerthana"
                  - option "Kwan Keat Leong"
                  - option "Medical Officer Aisya"
                  - option "Medical Officer_Amrita"
                  - option "Medical Officer_Annie"
                  - option "Medical Officer_Fikry"
                  - option "Medical Officer_Firdaus"
                  - option "Medical Officer_Kabir"
                  - option "Medical Officer_Natasha"
                  - option "Medical Officer_Pornima"
                  - option "Medical Officer_Raihan"
                  - option "Medical Officer_Shantanu"
                  - option "Medical Officer_Tieba"
                  - option "Nor Liza Ariffin"
                  - option "SABARI"
                  - option "TEST CONF TEEST NEW AJ"
                  - option "TMC Imaging"
              - generic [ref=e149]:
                - generic [ref=e150]: Visit Type*
                - combobox [ref=e152]:
                  - option "--Select--" [selected]
              - generic [ref=e154]:
                - generic [ref=e155]: Admission Source*
                - combobox [ref=e157]:
                  - option "--Select--" [selected]
                  - option "CAMP/Loyalty"
                  - option "External"
                  - option "Internal"
                  - option "Pre-Employment"
              - generic [ref=e159]:
                - generic [ref=e160]: Consultation Room
                - combobox [ref=e162]:
                  - option "--Select--" [selected]
              - generic [ref=e163]:
                - generic [ref=e164]:
                  - generic [ref=e165]: Queue No.*
                  - generic [ref=e166]:
                    - textbox [ref=e167]
                    - text: 
                - generic [ref=e170] [cursor=pointer]:
                  - checkbox "E-Invoicing Required" [ref=e171]
                  - text: E-Invoicing Required
              - generic [ref=e172]:
                - generic [ref=e173]:
                  - generic [ref=e174]: Ref Entity Type
                  - combobox [ref=e176]:
                    - option "--Select--" [selected]
                    - option "Agent"
                    - option "Refentity"
                - generic [ref=e177]:
                  - generic [ref=e178]: Promotion/Program
                  - combobox [disabled] [ref=e180]:
                    - option "--Select--" [selected]
              - generic [ref=e181]:
                - generic [ref=e182]:
                  - generic [ref=e183]: Ref Entity Name
                  - combobox [ref=e185]:
                    - option "--Select--" [selected]
                - generic [ref=e186]:
                  - generic [ref=e187]: Ref Entity Name
                  - textbox [ref=e189]
                - generic [ref=e191]:
                  - generic [ref=e192] [cursor=pointer]:
                    - checkbox "Medico Legal Case" [ref=e193]
                    - text: Medico Legal Case
                  - generic [ref=e194] [cursor=pointer]:
                    - checkbox "Brought Dead" [ref=e195]
                    - text: Brought Dead
                - generic [ref=e198] [cursor=pointer]:
                  - checkbox "Referral letter from GP or other hospitals" [ref=e199]
                  - text: Referral letter from GP or other hospitals
              - generic [ref=e201]:
                - generic [ref=e202]: Remark
                - textbox [ref=e204]
              - generic [ref=e205]:
                - generic [ref=e206]:
                  - generic [ref=e207]: Provisional Diagnosis
                  - generic [ref=e209]:
                    - textbox [ref=e210]
                    - button "" [ref=e212] [cursor=pointer]:
                      - generic [ref=e213]: 
                - generic [ref=e214]:
                  - generic [ref=e215]: Case Category
                  - combobox [ref=e217]:
                    - option "--Select--" [selected]
                    - option "Foreign Patients - Expatriate"
                    - option "Foreign Patients - Foreign Worker"
                    - option "Foreign Patients - Malaysia My Second Home (MM2H) Participant"
                    - option "Foreign Patients - Student"
                    - option "Foreign Patients -Professional Worker"
                    - option "Health Tourist"
                    - option "No Information"
                    - option "Tourist Seeking Treatment"
            - generic [ref=e218]:
              - generic [ref=e219]: PreviousVisits
              - table [ref=e221]:
                - rowgroup [ref=e222]:
                  - row "OP Visit No. Visit Date Doctor Sub Dept Department Visit Type Patient Type Consultation Room Promotion/Program Ref Entity Type Ref Entity Name Remark" [ref=e223]:
                    - columnheader "OP Visit No." [ref=e224]
                    - columnheader "Visit Date" [ref=e225]
                    - columnheader "Doctor" [ref=e226]
                    - columnheader "Sub Dept" [ref=e227]
                    - columnheader "Department" [ref=e228]
                    - columnheader "Visit Type" [ref=e229]
                    - columnheader "Patient Type" [ref=e230]
                    - columnheader "Consultation Room" [ref=e231]
                    - columnheader "Promotion/Program" [ref=e232]
                    - columnheader "Ref Entity Type" [ref=e233]
                    - columnheader "Ref Entity Name" [ref=e234]
                    - columnheader "Remark" [ref=e235]
                - rowgroup
              - button "Future Orders" [disabled] [ref=e239]
        - generic [ref=e240]:
          - generic [ref=e241]:
            - generic [ref=e244] [cursor=pointer]:
              - checkbox "Register Only" [ref=e245]
              - text: Register Only
            - generic [ref=e248] [cursor=pointer]:
              - checkbox "Charges Only" [checked] [ref=e249]
              - text: Charges Only
          - generic [ref=e251]:
            - generic [ref=e252]:
              - generic [ref=e254]:
                - generic [ref=e255]: Sign
                - button "Clear" [ref=e262] [cursor=pointer]
              - checkbox [ref=e263]
              - text: Cash
              - checkbox [checked] [ref=e264]
              - text: Credit
            - generic [ref=e265]:
              - button "Consent" [ref=e266] [cursor=pointer]
              - button "Patient History" [disabled] [ref=e267]
              - button "Save" [ref=e268] [cursor=pointer]
              - button "Clear" [ref=e269] [cursor=pointer]
        - text:  
  - textbox [ref=e271]
```

# Test source

```ts
  259 |     //      1. Encounter Type
  260 |     //      2. PRIMARY DOCTOR first  →  Department auto-loads from doctor selection
  261 |     //      3. Confirm Department loaded
  262 |     //      4. Loop doctors until Visit Type "New" is available → select it → STOP
  263 |     //      5. Queue No.
  264 |     //      6. Admission Source
  265 |     // =====================================================================
  266 |     async openVisitInformationSection() {
  267 |         const visitTab = this.page.locator(
  268 |             'a[href="#visitInfo"], a[ng-click*="visitInfo"], a[ng-click*="Visit"], ' +
  269 |             'li[ng-click*="visitInfo"] > a, .visit-info-tab > a'
  270 |         ).first();
  271 |  
  272 |         try {
  273 |             await visitTab.waitFor({ state: 'visible', timeout: 4000 });
  274 |             await visitTab.click();
  275 |         } catch {
  276 |             const fallback = this.page.getByRole('link', { name: /visit information/i })
  277 |                 .or(this.page.getByRole('tab',  { name: /visit information/i }))
  278 |                 .first();
  279 |             await fallback.waitFor({ state: 'visible', timeout: 4000 });
  280 |             await fallback.click();
  281 |         }
  282 |  
  283 |         // Wait for panel to be visible instead of timeout
  284 |         await expect(this.page.locator('select[ng-model="Visit.EncounterTypeID"]')).toBeVisible({ timeout: 5000 });
  285 |     }
  286 |  
  287 |     // =====================================================================
  288 |     // VISIT INFORMATION — Full flow:
  289 |     //   1. Encounter Type
  290 |     //   2. Find the real Doctor dropdown (probe ng-model names in DOM)
  291 |     //   3. Loop doctors → Department auto-loads → check Visit Type "New"
  292 |     //   4. Queue No.
  293 |     //   5. Admission Source
  294 |     // =====================================================================
  295 |     async fillVisitInformation(
  296 |         encounterType:   string = 'Outpatient',
  297 |         admissionSource: string = 'Internal',
  298 |         department:      string = '',
  299 |         targetVisitType: string = 'New'
  300 |     ) {
  301 | 
  302 |         // ── 1. ENCOUNTER TYPE ───────────────────────────────────────────
  303 |         const encounterDropdown = this.page.locator('select[ng-model="Visit.EncounterTypeID"]');
  304 |         await encounterDropdown.waitFor({ state: 'visible', timeout: 8000 });
  305 | 
  306 |         // Probe real option texts from the DOM — ng-options text may not match
  307 |         // the plain string passed in (casing, spacing, or different label entirely)
  308 |         const encounterOptions: { text: string; value: string }[] =
  309 |             await encounterDropdown.evaluate((sel: HTMLSelectElement) =>
  310 |                 Array.from(sel.options).map(o => ({ text: o.text.trim(), value: o.value }))
  311 |             );
  312 |         console.log(`[Visit] Encounter options available: ${JSON.stringify(encounterOptions)}`);
  313 | 
  314 |         // Case-insensitive partial match first, then fall back to first real option
  315 |         const matchedEncounter =
  316 |             encounterOptions.find(o =>
  317 |                 o.value !== '' &&
  318 |                 !o.value.startsWith('?') &&
  319 |                 o.text.toLowerCase().includes(encounterType.toLowerCase())
  320 |             ) ??
  321 |             encounterOptions.find(o =>
  322 |                 o.value !== '' &&
  323 |                 !o.value.startsWith('?') &&
  324 |                 !o.text.toLowerCase().includes('select')
  325 |             );
  326 | 
  327 |         if (!matchedEncounter) {
  328 |             throw new Error(`[Visit] No valid Encounter Type found. Options: ${JSON.stringify(encounterOptions)}`);
  329 |         }
  330 | 
  331 |         // Always select by value — immune to label text differences
  332 |         await encounterDropdown.selectOption({ value: matchedEncounter.value });
  333 |         await encounterDropdown.dispatchEvent('change');
  334 |         console.log(`[Visit] 1. Encounter Type → "${encounterType}"`);
  335 |         await this.page.waitForTimeout(1000); // let Angular digest + render doctor dropdown
  336 | 
  337 |         // ── 2. FIND THE REAL DOCTOR DROPDOWN ───────────────────────────
  338 |         // The ng-model name was unknown/guessed. We probe all visible
  339 |         // <select> elements in the Visit panel and pick the one whose
  340 |         // ng-model contains "Doctor" or "doctor" (case-insensitive).
  341 |         const doctorNgModel: string = await this.page.evaluate(() => {
  342 |             const selects = Array.from(document.querySelectorAll('select[ng-model]'));
  343 |             const match = selects.find(s => {
  344 |                 const model = s.getAttribute('ng-model') ?? '';
  345 |                 return model.toLowerCase().includes('doctor');
  346 |             });
  347 |             return match?.getAttribute('ng-model') ?? '';
  348 |         });
  349 | 
  350 |         if (!doctorNgModel) {
  351 |             throw new Error(
  352 |                 '[Visit] Could not find any <select ng-model="*doctor*"> in the DOM. ' +
  353 |                 'Ensure Encounter Type selection renders the doctor dropdown before this step.'
  354 |             );
  355 |         }
  356 |         console.log(`[Visit] 2. Doctor dropdown found → ng-model="${doctorNgModel}"`);
  357 | 
  358 |         // Wait until that dropdown has at least one real option
> 359 |         await expect.poll(
      |         ^ Error: Doctor dropdown (AppPatientData.AppDoctorModalityID) never populated
  360 |             () => this.page.evaluate((model: string) => {
  361 |                 const sel = document.querySelector(
  362 |                     `select[ng-model="${model}"]`
  363 |                 ) as HTMLSelectElement | null;
  364 |                 return sel ? sel.options.length : 0;
  365 |             }, doctorNgModel),
  366 |             { timeout: 10000, message: `Doctor dropdown (${doctorNgModel}) never populated` }
  367 |         ).toBeGreaterThan(1);
  368 | 
  369 |         // Snapshot all non-placeholder doctor options into memory
  370 |         const availableDoctors: { text: string; value: string }[] =
  371 |             await this.page.evaluate((model: string) => {
  372 |                 const sel = document.querySelector(
  373 |                     `select[ng-model="${model}"]`
  374 |                 ) as HTMLSelectElement | null;
  375 |                 if (!sel) return [];
  376 |                 return Array.from(sel.options)
  377 |                     .map(o => ({ text: o.text.trim(), value: o.value }))
  378 |                     .filter(o =>
  379 |                         o.value !== '' &&
  380 |                         !o.value.startsWith('string:') &&  // AngularJS placeholder
  381 |                         !o.text.toLowerCase().includes('select')
  382 |                     );
  383 |             }, doctorNgModel);
  384 | 
  385 |         console.log(`[Visit] ${availableDoctors.length} doctor(s) available. Scanning for Visit Type "${targetVisitType}"...`);
  386 | 
  387 |         if (availableDoctors.length === 0) {
  388 |             throw new Error(`[Visit] No selectable doctor options found in dropdown (ng-model="${doctorNgModel}")`);
  389 |         }
  390 | 
  391 |         // ── 3. DOCTOR LOOP ──────────────────────────────────────────────
  392 |         // Everything inside this loop uses page.evaluate (runs atomically
  393 |         // in the browser) so stale-element errors cannot occur.
  394 |         let foundWorkingDoctor = false;
  395 | 
  396 |         for (const doctor of availableDoctors) {
  397 |             console.log(`[Visit] Trying doctor: "${doctor.text}"...`);
  398 | 
  399 |             // Set doctor value + dispatch Angular change — all in one browser call
  400 |             await this.page.evaluate(
  401 |                 ({ model, val }: { model: string; val: string }) => {
  402 |                     const sel = document.querySelector(
  403 |                         `select[ng-model="${model}"]`
  404 |                     ) as HTMLSelectElement | null;
  405 |                     if (!sel) throw new Error(`Doctor select not found: ${model}`);
  406 |                     sel.value = val;
  407 |                     sel.dispatchEvent(new Event('change', { bubbles: true }));
  408 |                 },
  409 |                 { model: doctorNgModel, val: doctor.value }
  410 |             );
  411 | 
  412 |             await this.page.waitForTimeout(800); // Angular digest: department auto-loads
  413 | 
  414 |             // ── 3a. Log which Department auto-loaded ─────────────────────
  415 |             const deptLabel: string = await this.page.evaluate(() => {
  416 |                 const sel = document.querySelector(
  417 |                     'select[ng-model="Visit.DepartmentID"]'
  418 |                 ) as HTMLSelectElement | null;
  419 |                 return sel?.options[sel.selectedIndex]?.text?.trim() ?? '(not found)';
  420 |             });
  421 |             console.log(`[Visit]   Department auto-loaded → "${deptLabel}"`);
  422 | 
  423 |             // ── 3b. Find Visit Type dropdown ng-model (probe once) ───────
  424 |             const visitTypeNgModel: string = await this.page.evaluate(() => {
  425 |                 const selects = Array.from(document.querySelectorAll('select[ng-model]'));
  426 |                 const match = selects.find(s => {
  427 |                     const m = s.getAttribute('ng-model') ?? '';
  428 |                     return m.toLowerCase().includes('visittype') || m.toLowerCase().includes('visit.type');
  429 |                 });
  430 |                 return match?.getAttribute('ng-model') ?? 'Visit.VisitType';
  431 |             });
  432 | 
  433 |             // ── 3c. Poll Visit Type for real options ─────────────────────
  434 |             try {
  435 |                 await expect.poll(
  436 |                     () => this.page.evaluate((model: string) => {
  437 |                         const sel = document.querySelector(
  438 |                             `select[ng-model="${model}"]`
  439 |                         ) as HTMLSelectElement | null;
  440 |                         return sel ? sel.options.length : 0;
  441 |                     }, visitTypeNgModel),
  442 |                     { timeout: 4000 }
  443 |                 ).toBeGreaterThan(1);
  444 | 
  445 |                 const visitTypes: string[] = await this.page.evaluate((model: string) => {
  446 |                     const sel = document.querySelector(
  447 |                         `select[ng-model="${model}"]`
  448 |                     ) as HTMLSelectElement | null;
  449 |                     return sel
  450 |                         ? Array.from(sel.options).map(o => o.text.trim())
  451 |                         : [];
  452 |                 }, visitTypeNgModel);
  453 | 
  454 |                 console.log(`[Visit]   Available Visit Types: [${visitTypes.join(', ')}]`);
  455 | 
  456 |                 if (visitTypes.includes(targetVisitType)) {
  457 |                     console.log(`✅ [Visit] "${doctor.text}" has "${targetVisitType}" — selecting & stopping.`);
  458 | 
  459 |                     await this.page.evaluate(
```
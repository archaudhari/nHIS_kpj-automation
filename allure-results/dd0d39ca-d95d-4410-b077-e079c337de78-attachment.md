# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
Error: Playwright Test did not expect test.describe() to be called here.
Most common reasons include:
- You are calling test.describe() in a configuration file.
- You are calling test.describe() in a file that is imported by the configuration file.
- You have two different versions of @playwright/test. This usually happens
  when one of the dependencies in your package.json depends on @playwright/test.
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - generic [ref=e12]: "Last Login : 12/05/2026 12:57:30"
            - listitem [ref=e13]:
              - link " 249" [ref=e15] [cursor=pointer]:
                - /url: "#/InternalMessaging"
                - generic [ref=e16]: 
                - generic [ref=e17]: "249"
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
          - list [ref=e43]:
            - listitem [ref=e44]:
              - link " Appointment " [ref=e45] [cursor=pointer]:
                - /url: "#"
                - generic [ref=e46]: 
                - text: Appointment
                - generic [ref=e47]: 
              - text:      
            - listitem [ref=e48]:
              - link " Registration" [active] [ref=e49] [cursor=pointer]:
                - /url: "#/VisitScreen"
                - generic [ref=e50]: 
                - text: Registration
            - listitem [ref=e51]:
              - link " Outpatient Queue Management" [ref=e52] [cursor=pointer]:
                - /url: "#/queueManagement"
                - generic [ref=e53]: 
                - text: Outpatient Queue Management
            - listitem [ref=e54]:
              - link " Doctor Queue" [ref=e55] [cursor=pointer]:
                - /url: "#/DoctorWiseQueue"
                - generic [ref=e56]: 
                - text: Doctor Queue
            - listitem [ref=e57]:
              - link " Token Display" [ref=e58] [cursor=pointer]:
                - /url: "#/TokenDisplay"
                - generic [ref=e59]: 
                - text: Token Display
            - listitem [ref=e60]:
              - link " Patient Dashboard" [ref=e61] [cursor=pointer]:
                - /url: "#/PatientDashboard"
                - generic [ref=e62]: 
                - text: Patient Dashboard
            - listitem
            - listitem [ref=e63]:
              - link " Patient History" [ref=e64] [cursor=pointer]:
                - /url: "#/PatientHelpDesk"
                - generic [ref=e65]: 
                - text: Patient History
            - listitem [ref=e66]:
              - link " Landingpageimg" [ref=e67] [cursor=pointer]:
                - /url: "#/LandingPage"
                - generic [ref=e68]: 
                - text: Landingpageimg
            - listitem [ref=e69]:
              - link " Self Arrival" [ref=e70] [cursor=pointer]:
                - /url: "#/SelfArrival"
                - generic [ref=e71]: 
                - text: Self Arrival
        - listitem [ref=e72]:
          - link "IP" [ref=e73] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e74]: IP
        - listitem [ref=e75]:
          - link "Finance" [ref=e76] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e77]: Finance
        - listitem [ref=e78]:
          - link "Billing" [ref=e79] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e80]: Billing
        - listitem [ref=e81]:
          - link "Investigation" [ref=e82] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e83]: Investigation
        - listitem [ref=e84]:
          - link "Nursing Station" [ref=e85] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e86]: Nursing Station
        - listitem [ref=e87]:
          - link "OT" [ref=e88] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e89]: OT
        - listitem [ref=e90]:
          - link "Inventory" [ref=e91] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e92]: Inventory
        - listitem [ref=e93]:
          - link "Ancillary Services" [ref=e94] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e95]: Ancillary Services
        - listitem [ref=e96]:
          - link "Report" [ref=e97] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e98]: Report
        - listitem [ref=e99]:
          - link "System Configuration" [ref=e100] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e101]: System Configuration
        - listitem [ref=e102]:
          - link "Application Configuration" [ref=e103] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e104]: Application Configuration
        - listitem [ref=e105]:
          - link "Telemedicine" [ref=e106] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e107]: Telemedicine
    - generic [ref=e114]:
      - generic [ref=e116]:
        - tablist [ref=e117]:
          - generic [ref=e118]:
            - tab "Patient Information" [ref=e119]:
              - button "Patient Information" [ref=e120] [cursor=pointer]
              - button
            - tabpanel "Patient Information" [ref=e121]:
              - generic [ref=e122]:
                - generic [ref=e123]:
                  - generic [ref=e125]:
                    - generic [ref=e126]: Reg. Date
                    - textbox "dd/mm/yyyy" [disabled] [ref=e129]: 11/05/2026
                  - generic [ref=e131]:
                    - generic [ref=e132]: Reg. Type
                    - combobox "Reg. Type" [ref=e134]:
                      - option "--Select--" [selected]
                  - generic [ref=e137]:
                    - generic [ref=e138] [cursor=pointer]:
                      - checkbox "Staff" [ref=e139]
                      - text: Staff
                    - generic [ref=e140] [cursor=pointer]:
                      - radio "MRN No." [checked] [ref=e141]
                      - text: MRN No.
                    - generic [ref=e142] [cursor=pointer]:
                      - radio "NRIC" [ref=e143]
                      - text: NRIC
                  - generic [ref=e145]:
                    - generic [ref=e146]: MRN No.
                    - generic [ref=e148]:
                      - textbox [disabled] [ref=e149]
                      - generic [ref=e150]:
                        - button "Search Patient" [disabled] [ref=e151]:
                          - generic [ref=e152]: 
                        - button "Find Patient" [disabled] [ref=e153]:
                          - img
                        - button "Find Appointment Patient" [ref=e154] [cursor=pointer]:
                          - img
                        - button "Read MyKad Card" [ref=e155] [cursor=pointer]:
                          - img
                        - text: 
                - generic [ref=e156]:
                  - generic [ref=e158]:
                    - generic [ref=e159]: Name
                    - generic [ref=e161]:
                      - combobox [ref=e162]:
                        - option "Title" [selected]
                      - textbox [ref=e163]
                  - generic [ref=e165]:
                    - generic [ref=e166]: Middle Name
                    - textbox [ref=e169]
                  - generic [ref=e171]:
                    - generic [ref=e172]: Last Name
                    - textbox [ref=e175]
                  - generic [ref=e177]:
                    - generic [ref=e178]: Family Name
                    - textbox [ref=e181]
                  - generic [ref=e183]:
                    - generic [ref=e184]: Identification Type*
                    - combobox [ref=e186]:
                      - option "--Select--" [selected]
                  - generic [ref=e188]:
                    - generic [ref=e189]: NRIC
                    - textbox [ref=e191]
                  - generic [ref=e193]:
                    - generic [ref=e194]: Passport No.*
                    - textbox [ref=e196]
                    - button "Visa" [ref=e198] [cursor=pointer]
                  - generic [ref=e200]:
                    - generic [ref=e201]: Passport Expiry Date*
                    - textbox "dd/mm/yyyy" [ref=e204]
                  - generic [ref=e206]:
                    - generic [ref=e207]: Other Identification No.
                    - textbox [ref=e209]
                  - generic [ref=e211]:
                    - generic [ref=e212]: Nationality*
                    - combobox [ref=e214]:
                      - option "--Select--" [selected]
                  - generic [ref=e216]:
                    - generic [ref=e217]: Gender
                    - combobox [ref=e219]:
                      - option "-Select-" [selected]
                  - generic [ref=e221]:
                    - generic [ref=e222]: Date of Birth
                    - textbox "Passport Expiry Date* Date of Birth" [ref=e225]:
                      - /placeholder: dd/mm/yyyy
                  - text:       
                  - generic [ref=e227]:
                    - generic [ref=e228]: Age
                    - generic [ref=e230]:
                      - textbox "Year(s)" [ref=e231]
                      - textbox "Month(s)" [ref=e232]
                      - textbox "Day(s)" [ref=e233]
                  - generic [ref=e235]:
                    - generic [ref=e236]: Religion
                    - combobox [ref=e238]:
                      - option "--Select--" [selected]
                  - generic [ref=e240]:
                    - generic [ref=e241]: Race*
                    - combobox [ref=e243]:
                      - option "--Select--" [selected]
                  - generic [ref=e245]:
                    - generic [ref=e246]: Marital Status
                    - combobox [ref=e248]:
                      - option "--Select--" [selected]
                  - generic [ref=e250]:
                    - generic [ref=e251]: TIN Number
                    - textbox [ref=e253]
                  - generic [ref=e255]:
                    - generic [ref=e256]: Blood Group
                    - combobox [ref=e258]:
                      - option "--Select--" [selected]
                  - generic [ref=e260]:
                    - generic [ref=e261]: Income Category
                    - combobox [ref=e263]:
                      - option "--Select--" [selected]
                  - generic [ref=e267]:
                    - generic [ref=e268] [cursor=pointer]:
                      - checkbox "VIP" [ref=e269]
                      - text: VIP
                    - generic [ref=e270] [cursor=pointer]:
                      - checkbox "Pregnant" [disabled] [ref=e271]
                      - text: Pregnant
                    - generic [ref=e272] [cursor=pointer]:
                      - checkbox "Ambulance Transfer" [ref=e273]
                      - text: Ambulance Transfer
                  - generic [ref=e275]:
                    - generic [ref=e276]: Expected Delivery
                    - textbox "dd/mm/yyyy" [disabled] [ref=e279]
                  - generic [ref=e281]:
                    - generic [ref=e282]: Patient Category
                    - combobox [ref=e284]:
                      - option "--Select--" [selected]
                      - option "Foreign Patients - Expatriate"
                      - option "Foreign Patients - Foreign Worker"
                      - option "Foreign Patients - Malaysia My Second Home (MM2H) Participant"
                      - option "Foreign Patients - Student"
                      - option "Foreign Patients -Professional Worker"
                      - option "Health Tourist"
                      - option "No Information"
                      - option "Tourist Seeking Treatment"
                  - generic [ref=e286]:
                    - generic [ref=e287]: Attach Photo
                    - generic [ref=e288]:
                      - generic:
                        - generic:
                          - img "Attach Photo"
                      - img [ref=e289]
                      - button "Capture Image" [ref=e290] [cursor=pointer]:
                        - img [ref=e291]
                  - generic [ref=e293]:
                    - generic [ref=e294]: Thumb
                    - generic [ref=e295]:
                      - generic:
                        - generic:
                          - img "Attach Thumb"
                      - img [ref=e296]
                      - generic:
                        - generic:
                          - img "IC Card"
                      - img [ref=e297]
                  - generic [ref=e299]:
                    - generic [ref=e300]: MyKAD IP
                    - textbox [ref=e302]
                - generic [ref=e303]:
                  - heading "Correspondence Details" [level=4] [ref=e305]
                  - generic [ref=e307]:
                    - generic [ref=e309]:
                      - generic [ref=e310]: Address Line 1 *
                      - textbox [ref=e312]
                    - generic [ref=e314]:
                      - generic [ref=e315]: Address Line 2
                      - textbox [ref=e317]
                    - generic [ref=e319]:
                      - generic [ref=e320]: Address Line 3
                      - textbox [ref=e322]
                    - generic [ref=e324]:
                      - generic [ref=e325]: Postcode
                      - textbox [ref=e327]
                    - generic [ref=e329]:
                      - generic [ref=e330]: City / District
                      - combobox [ref=e332]:
                        - option "--Select--" [selected]
                    - generic [ref=e334]:
                      - generic [ref=e335]: State*
                      - combobox [ref=e337]:
                        - option "--Select--" [selected]
                    - generic [ref=e339]:
                      - generic [ref=e340]: Country*
                      - combobox [ref=e342]:
                        - option "--Select--" [selected]
                    - generic [ref=e344]:
                      - generic [ref=e345]:  Mobile No
                      - generic [ref=e347]:
                        - combobox [ref=e348]:
                          - option "Code" [selected]
                        - textbox "Mobile" [ref=e349]
                    - generic [ref=e351]:
                      - generic [ref=e352]: Phone No.
                      - generic [ref=e354]:
                        - textbox [ref=e355]: "60"
                        - textbox "Phone" [ref=e356]
                    - generic [ref=e358]:
                      - generic [ref=e359]: E-mail
                      - textbox [ref=e361]
                - generic [ref=e362]:
                  - heading "Other Details" [level=4] [ref=e364]
                  - generic [ref=e366]:
                    - generic [ref=e368]:
                      - generic [ref=e369]: Remark
                      - textbox [ref=e371]
                    - generic [ref=e373]:
                      - generic [ref=e374]: Language Preferred
                      - combobox [ref=e376]:
                        - option "--Select--" [selected]
                    - generic [ref=e378]:
                      - generic [ref=e379]: Employer/Occupation
                      - textbox [ref=e381]
                - button "Update Registration" [disabled] [ref=e383]
                - generic [ref=e385]:
                  - tab "Next of Kin Details" [ref=e386]:
                    - heading "Next of Kin Details" [level=4] [ref=e387]
                  - generic [ref=e388]:
                    - table [ref=e390]:
                      - rowgroup [ref=e391]:
                        - row "Delete Title Name Nationality NRIC Passport No. Address E-mail Mobile No Phone No Relationship Payor Occupation Remarks Address 1 Address 2 LegalGuardian City / District State Country Postcode" [ref=e392]:
                          - columnheader "Delete" [ref=e393]
                          - columnheader "Title" [ref=e394]
                          - columnheader "Name" [ref=e395]
                          - columnheader "Nationality" [ref=e396]
                          - columnheader "NRIC" [ref=e397]
                          - columnheader "Passport No." [ref=e398]
                          - columnheader "Address" [ref=e399]
                          - columnheader "E-mail" [ref=e400]
                          - columnheader "Mobile No" [ref=e401]
                          - columnheader "Phone No" [ref=e402]
                          - columnheader "Relationship" [ref=e403]
                          - columnheader "Payor" [ref=e404]
                          - columnheader "Occupation" [ref=e405]
                          - columnheader "Remarks" [ref=e406]
                          - columnheader "Address 1" [ref=e407]
                          - columnheader "Address 2" [ref=e408]
                          - columnheader "LegalGuardian" [ref=e409]
                          - columnheader "City / District" [ref=e410]
                          - columnheader "State" [ref=e411]
                          - columnheader "Country" [ref=e412]
                          - columnheader "Postcode" [ref=e413]
                      - rowgroup
                    - generic [ref=e416]:
                      - generic [ref=e417]:
                        - generic [ref=e418] [cursor=pointer]:
                          - radio "MRN No." [checked] [ref=e419]
                          - text: MRN No.
                        - generic [ref=e420] [cursor=pointer]:
                          - radio "NRIC" [ref=e421]
                          - text: NRIC
                        - generic [ref=e422]: MRN No.
                      - generic [ref=e424]:
                        - textbox [ref=e425]
                        - generic [ref=e426]:
                          - button "Search Patient" [ref=e427] [cursor=pointer]:
                            - generic [ref=e428]: 
                          - button "Find Patient" [ref=e429] [cursor=pointer]:
                            - img
                          - button "Read MyKad Card" [ref=e430] [cursor=pointer]:
                            - img
                    - generic [ref=e431]:
                      - generic [ref=e433]:
                        - generic [ref=e434]: Name *
                        - generic [ref=e436]:
                          - combobox [ref=e439]:
                            - option "Title" [selected]
                          - textbox [ref=e441]
                      - generic [ref=e443]:
                        - generic [ref=e444]: Nationality*
                        - combobox [ref=e446]:
                          - option "--Select--" [selected]
                      - generic [ref=e448]:
                        - generic [ref=e449]: Passport No.
                        - textbox [ref=e451]
                      - generic [ref=e453]:
                        - generic [ref=e454]: NRIC
                        - textbox [ref=e456]
                      - generic [ref=e458]:
                        - generic [ref=e459]: Relationship *
                        - combobox [ref=e461]:
                          - option "--Select--" [selected]
                          - option "Adopted Child"
                          - option "Biological Child"
                          - option "Father"
                          - option "Grandfather"
                          - option "Grandmother"
                          - option "Guardian"
                          - option "Husband"
                          - option "Mother"
                          - option "No Information"
                          - option "Others"
                          - option "Self"
                          - option "Sibling"
                          - option "Step Child"
                          - option "Wife"
                      - generic [ref=e463]:
                        - generic [ref=e464]: Payor
                        - combobox [ref=e466]:
                          - option "--Select--" [selected]
                          - option "MALAYAN RACING ASSOCIATION"
                          - option "AA INTERNATIONAL HUB SDN BHD"
                          - option "ADABI CONSUMER INDUSTRIES SDN BHD"
                          - option "ADVANCED AGRIECOLOGICAL RESEARCH SDN BHD"
                          - option "AETNA GLOBAL BENEFITS (ASIA PACIFIC) LIMITED"
                          - option "AIA BERHAD C/O MICARE SDN BHD"
                          - option "AIA BHD. (EB)"
                          - option "AIA BHD. (EB) - P"
                          - option "AIA BHD. (INDIVIDUAL)"
                          - option "AIA BHD. (INDIVIDUAL) - P"
                          - option "AIA PUBLIC TAKAFUL BHD. (EB)"
                          - option "AIA PUBLIC TAKAFUL BHD. (EB) - P"
                          - option "AIA PUBLIC TAKAFUL BHD. (INDIVIDUAL)"
                          - option "AIA PUBLIC TAKAFUL BHD. (INDIVIDUAL) - P"
                          - option "AIG TRAVEL ASIA PACIFIC PTE LTD."
                          - option "ALKOOT INSURANCE & REINSURANCE COMPANY"
                          - option "ALLIANZ WORLDWIDE CARE"
                          - option "ALLNEX MALAYSIA SDN BHD"
                          - option "AMANAH RAYA BERHAD"
                          - option "AMANAH SAHAM NASIONAL BERHAD"
                          - option "AMGENERAL INSURANCE BERHAD"
                          - option "AMITA NAZA SDN BHD"
                          - option "AMMETLIFE C/O INTEGRATED HEALTH PLANS (MALAYSIA) SDN BHD"
                          - option "ANTSBEES SDN BHD"
                          - option "AP SOLUTIONS GMBH, SUCCURSALE FRANCAISE"
                          - option "APRIL ASSISTANCE (THAILAND) CO LTD."
                          - option "APRIL VIETNAM COMPANY LIMITED"
                          - option "ASIA ASSISTANCE NETWORK (M) SDN BHD C/O PROGRESSIVE INSURANCE BERHAD"
                          - option "ASIA ASSISTANCE NETWORK (M) SDN BHD C/O RHB INSURANCE BERHAD"
                          - option "ASIA JET PARTNERS MALAYSIA SDN BHD"
                          - option "ASP MEDICAL CLINIC SDN BHD (KUALA LUMPUR)"
                          - option "ASP MEDICAL CLINIC SDN BHD (PULAU PINANG)"
                          - option "ASSUNTA HOSPITAL"
                          - option "AUTO BAVARIA RETAIL C/O SIME DARBY GLOBAL SERVICES"
                          - option "AVISENA HEALTHCARE SDN BHD"
                          - option "AXA WINTERTHUR"
                          - option "BABY VACCINATION VOUCHER"
                          - option "BANK NEGARA MALAYSIA"
                          - option "BEACON HOSPITAL SDN BHD"
                          - option "BERJAYA AIR SDN BHD"
                          - option "BERJAYA CORPORATION BERHAD"
                          - option "BERJAYA ECO SERVICES SDN BHD"
                          - option "BERJAYA ENVIROPARKS SDN BHD"
                          - option "BERJAYA HILLS BERHAD"
                          - option "BERJAYA HILLS RESORT BERHAD"
                          - option "BERJAYA HOTELS & RESORTS"
                          - option "BERJAYA LAND BERHAD"
                          - option "BERJAYA PROJECT MANAGEMENT SDN BHD"
                          - option "BERJAYA SOMPO INSURANCE BERHAD"
                          - option "BOOKDOC (HEALTH4U SOLUTIONS SDN BHD)"
                          - option "BOUSTEAD IKANO SDN BHD"
                          - option "BPJ-BERJAYA SDN BHD"
                          - option "BRIGHT TERM SDN BHD"
                          - option "CENGILD G.I MEDICAL CENTRE SDN BHD"
                          - option "CIGNA INTERNATIONAL EXPATRIATE BENEFITS"
                          - option "CINEMATA PRODUCTIONS SDN BHD"
                          - option "CLARITY CREST SDN BHD"
                          - option "COLUMBIA ASIA HOSPITAL - CHERAS"
                          - option "COLUMBIA ASIA HOSPITAL - SEREMBAN"
                          - option "COMPUMED SERVICES SDN BHD"
                          - option "COMPUMED SERVICES SDN BHD (MSIG INSURANCE)"
                          - option "CSC STEEL SDN BHD"
                          - option "CUEPACSCARE4U SOLUTIONS SDN BHD"
                          - option "DATO DR MOHD HAMZAH BIN KAMARULZAMAN - RESIDENT DOCTOR"
                          - option "DATO' DR NOOR ZALMY AZIZAN"
                          - option "DATO'DR ZAKARIA ZAHARI (RESIDENT CONSULTANT)"
                          - option "DATUK DR JOSEPH YAP CHONG KIAT"
                          - option "DEWAN BAHASA DAN PUSTAKA MALAYSIA"
                          - option "DIAVERUM MALAYSIA SDN BHD"
                          - option "DR A.ANANDA DORAI"
                          - option "DR ACHDIAT MAHPHA FANSURI BIN MUSTAPA"
                          - option "DR ALBERT NAVIN DURAIRATNAM"
                          - option "DR ALDRIN LIE TZE MIN"
                          - option "DR ANAND SACHITHANANDAN"
                          - option "DR ANITA CODATI (SESSIONAL CONSULTANT)"
                          - option "DR ANITA KAUR AHLUWALIA - RESIDENT CONSULTANT"
                          - option "DR ANUSHREE NARAYANAN"
                          - option "DR ARIFAH MOHD AMIN@HAMIM"
                          - option "DR ARUN ARUNASALAM -SESSIONAL CONSULTANT"
                          - option "DR AW TUI IAR'S"
                          - option "DR BALACHANDRAN A/L APOO"
                          - option "DR CHONG KUOH REN"
                          - option "DR DENNIS KHOO YEAP TENG"
                          - option "DR ELANG KUMARAN (RESIDENT DOCTOR)"
                          - option "DR ELIZABETH LIM YENN LYNN - RESIDENT DOCTOR"
                          - option "DR FADZRUL ABBAS - SESSIONAL CONSULTANT"
                          - option "DR FONG TECK SIONG - SESSIONAL CONSULTANT"
                          - option "DR FOO SZE YUEN (RESIDENT DOCTOR)"
                          - option "DR GAN ING EARN"
                          - option "DR GANGARAM HEMANDAS BELANI"
                          - option "DR GANGULY GAUTAM"
                          - option "DR GARY LEE CHIN KEONG"
                          - option "DR GURDEEP SINGH NARAIN SINGH"
                          - option "DR HAFISYATUL AIZA BINTI ZAINAL ABIDIN (RESIDENT DOCTOR)"
                          - option "DR HAIZAL HARON KAMAR"
                          - option "DR HANIZA ZAINAL ABIDIN"
                          - option "DR HEMANTH KUMAR RAMASAMY (RESIDENT DOCTOR)"
                          - option "DR HENG KIEN SENG"
                          - option "DR HISHAM KUNHIMON"
                          - option "DR HUI MUN TSONG"
                          - option "DR JAMALUL AZIZI BIN ABDUL RAHAMAN"
                          - option "DR JEREMY PRAKASH SILVANATHAN (SESSIONAL DOCTOR)"
                          - option "DR KENG TEE CHAU"
                          - option "DR KENNETH ROHAN LEE CHEE KEONG (RESIDENT CONSULTANT)"
                          - option "DR KHAIRUN MARINA BINTI BACHOK – RESIDENT DOCTOR"
                          - option "DR KHOO EN SZEE"
                          - option "DR KHOR SIM EE"
                          - option "DR KOONG JUN KIT (RESIDENT DOCTOR)"
                          - option "DR KRISHNA KUMAR S. KATHERAVELOO (SESSIONAL CONSULTANT)"
                          - option "DR KULADEVA RATNAM"
                          - option "DR KWAN KEAT LEONG"
                          - option "DR LAU GIN CHOY"
                          - option "DR LEE SOON KHAI"
                          - option "DR LEONG WAI YEW"
                          - option "DR LIM AI WEI"
                          - option "DR LIM CHOR SHEN"
                          - option "DR LING SHIH GANG"
                          - option "DR LOH KHEE FEEI (SESSIONAL DOCTOR)"
                          - option "DR MALLINA SIVARAJASINGAM"
                          - option "DR MANOHAR ARUMUGAM"
                          - option "DR MOHAMMAD NAWAR"
                          - option "DR MOHAMMED FAUZI ABDUL RANI"
                          - option "DR MOHANASUNDRAM PILLAI – VISITING DOCTOR"
                          - option "DR MOHD REDZUAN BIN ISMAIL"
                          - option "DR MUHAMMAD RAHMANI BIN JAFFAR (VISITING CONSULTANT)"
                          - option "DR MUHD DANIEL SOMA"
                          - option "DR MUHILAN PARAMESWARAN"
                          - option "DR NAVDEEP SINGH PANNU"
                          - option "DR NOR LIZA ARIFFIN (RESIDENT DOCTOR)"
                          - option "DR NUR ADILA BINTI MOKHTAR (RESIDENT DOCTOR)"
                          - option "DR NURHAZINAT BINTI MOHAMED YUNUS"
                          - option "DR OON GIUN HUA"
                          - option "DR PREMILA ARUL ARUMUGAM (RESIDENT DOCTOR)"
                          - option "DR PRIADARSHINI SOMASUNDARAM"
                          - option "DR RAJESH KUMAR PARAMSIVAM"
                          - option "DR RAMPRASAD ARADADA"
                          - option "DR RAVINDRAN M. RAMASAMY"
                          - option "DR REYNU RAJAN - SESSIONAL CONSULTANT"
                          - option "DR RUVEENA BHAVANI RAJARAM (RESIDENT DOCTOR)"
                          - option "DR SAIFUL RAZMAN MOHD NOOR"
                          - option "DR SANDEV SINGH - RESIDENT DOCTOR"
                          - option "DR SANGITA DHARSHINI (RESIDENT DOCTOR)"
                          - option "DR SEE BENG TEONG – RESIDENT DOCTOR"
                          - option "DR SHALINI BHASKAR"
                          - option "DR SHANTHI RATNAM (RESIDENT)"
                          - option "DR SHIVANESAN STRIMARI RAJAMANIKAN (RESIDENT DOCTOR)"
                          - option "DR SIA SHEAU FUNG - RESIDENT DOCTOR"
                          - option "DR SIVAKUMARAN KARUPAYAH"
                          - option "DR SOEHARDY ZAINUDDIN"
                          - option "DR SOONG KEAN LEONG"
                          - option "DR SUEHAZLYN - (RESIDENT)"
                          - option "DR SUMIATI MOHD DAUD"
                          - option "DR SUNDER RAMASAMY"
                          - option "DR SURINDER SINGH"
                          - option "DR TAN CHIH KIANG (RESIDENT DOCTOR)"
                          - option "DR TAN CHONG SEONG - VISITING O&G"
                          - option "DR TAN CHOR NGEE"
                          - option "DR TAN GIE HOOI"
                          - option "DR TAN LAN ENG"
                          - option "DR TAN LENG LENG – RESIDENT DOCTOR"
                          - option "DR TAN WEE YONG (RESIDENT)"
                          - option "DR TAUFIQ BIN ABDULLAH (RESIDENT)"
                          - option "DR TERENCE TAY KHAI WEI"
                          - option "DR THANEEMALAI JEGANATHAN"
                          - option "DR THOMAS JOTHINAYAGAM"
                          - option "DR VANITA PARAMAJOTHY"
                          - option "DR VIJEYASINGAM RAJASINGAM"
                          - option "DR WAI KOK YAU"
                          - option "DR WAN HANIZA BTE WAN MOHAMAD"
                          - option "DR WAN HIMRATUL AZLIZA BINTI WAN HARUN"
                          - option "DR WONG CHEE PIAU"
                          - option "DR WONG SZE MING"
                          - option "DR YEONG YEW KWAN"
                          - option "DR YEU BOON KIAN"
                          - option "DR YONG JEE KIEN"
                          - option "DR YUGARAJAH ASOKUMARAN (RESIDENT DOCTOR)"
                          - option "DR ZAMZURI ZAKARIA"
                          - option "EBEN ASSIST SDN BHD"
                          - option "EDGENTA HEALTHCARE MANAGEMENT SDN BHD"
                          - option "EDGENTA UEMS SDN BHD"
                          - option "ELMINNA CARE SDN BHD (KLINIK ELMINNA)"
                          - option "EMA GLOBAL ASSISTANCE SDN BHD"
                          - option "EPSON PRECISION MALAYSIA SDN BHD"
                          - option "E-TECH IT SDN BHD"
                          - option "ETIQA FAMILY TAKAFUL BERHAD"
                          - option "ETIQA FAMILY TAKAFUL BERHAD - P"
                          - option "ETIQA LIFE INSURANCE BERHAD"
                          - option "ETIQA STAFF C/O ETIQA FAMILY TAKAFUL BERHAD"
                          - option "EURO-CENTER (THAILAND) CO., LTD"
                          - option "EUROP ASSISTANCE - GLOBAL CORPORATE SOLUTIONS"
                          - option "EUROP ASSISTANCE MALAYSIA INTERNATIONAL HUB SDN BHD"
                          - option "EUROP ASSISTANCE SERVICES (M) SDN BHD"
                          - option "EUROP ASSISTANCE SERVICES (M) SDN BHD C/O AMMETLIFE INSURANCE BERHAD"
                          - option "EUROP ASSISTANCE SERVICES (M) SDN BHD C/O AXA AFFIN GENERAL INSURANCE BERHAD"
                          - option "EUROP ASSISTANCE SERVICES (M) SDN BHD C/O HONG LEONG ASSURANCE BERHAD"
                          - option "EUROP ASSISTANCE SERVICES (M) SDN BHD C/O HONG LEONG MSIG TAKAFUL BERHAD"
                          - option "EUROP ASSISTANCE SERVICES (M) SDN BHD C/O MCIS INSURANCE BERHAD"
                          - option "EXIMIUS MEDICAL ADMINISTRATION SOLUTIONS SDN BHD (EMAS)"
                          - option "FEDERAL LAND DEVELOPMENT AUTHORITY (FELDA)"
                          - option "FFM BERHAD"
                          - option "FLEXBEN SOLUTIONS PLT"
                          - option "FLOWCO (MALAYSIA) SDN BHD"
                          - option "FO GUANG SHAN (MALAYSIA)"
                          - option "FOMEMA SDN BHD"
                          - option "FORWARD VICTORY SDN BHD"
                          - option "FULLERTON HEALTHCARE GROUP PTE. LTD."
                          - option "GBA CORPORATION SDN BHD"
                          - option "GENE SOLUTIONS GENOMICS MALAYSIA SDN BHD"
                          - option "GENTING BERHAD"
                          - option "GENTING MALAYSIA BERHAD"
                          - option "GHHS HEALTHCARE SDN BHD"
                          - option "GLENMARIE PROPERTIES SDN BHD"
                          - option "GLOBAL DOCTORS HOSPITAL"
                          - option "GLOBAL MEDICALL ASSISTANCE (M) SDN BHD"
                          - option "GREAT EASTERN LIFE ASSURANCE (M) BHD C/O MICARE SDN BHD"
                          - option "HEALIX INTERNATIONAL LIMITED"
                          - option "HEALTH CONNECT SDN BHD"
                          - option "HEALTH DIGITAL TECHNOLOGIES SDN. BHD"
                          - option "HEALTHCARE - MEDICLINIC DEPARTMENT (AAN) C/O ASIA ASSISTANCE NETWORK (M) SDN BHD"
                          - option "HEALTHMETRICS SDN BHD"
                          - option "HEALTIVO CLINIC (HEALTIVO SDN BHD)"
                          - option "HENNER-GMC UG 13"
                          - option "HIGH COMMISSION OF THE DEMOCRATIC SOCIALIST REPUBLIC OF SRI LANKA"
                          - option "HYUNDAI-SIME DARBY MOTORS SDN BHD"
                          - option "IA INTERNATIONAL ASSISTANCE SDN BHD"
                          - option "IHM SDN BHD"
                          - option "IKANO CORPORATION SDN BHD"
                          - option "IKANO HANDEL SDN BHD"
                          - option "INSTITUT KWSP"
                          - option "INSTITUT PENYELIDIKAN PERHUTANAN MALAYSIA (FRIM)"
                          - option "INSTITUT TADBIRAN AWAM NEGARA (INTAN)"
                          - option "INTEGRATED HEALTH PLANS (MALAYSIA) SDN BHD"
                          - option "INTEGRATED ONCOLOGY CENTER (KUALA LUMPUR) SDN.BHD. (HOSPITAL PICASO)"
                          - option "INTER MUTUELLES ASSISTANCE G.I.E"
                          - option "INTERNATIONAL ISLAMIC UNIVERSITY MALAYSIA"
                          - option "INTERNATIONAL MEDICARE GROUP SDN BHD"
                          - option "INTERNATIONAL SOS (M) SDN BHD"
                          - option "INTERNATIONAL SOS GLOBAL CORPORATE SERVICES SDN BHD"
                          - option "ISLAND HOSPITAL SDN BHD"
                          - option "IVF TECHNOLOGIES SDN BHD"
                          - option "IX CHANGE PTE LTD"
                          - option "JABATAN HAL EHWAL VETERAN ATM"
                          - option "JABATAN PERKHIDMATAN AWAM MALAYSIA"
                          - option "JWK HEALTHCARE SDN BHD (KLINIK PHONG)"
                          - option "KARAMJEET SINGH & CO."
                          - option "KKM HOSPITAL PUTRAJAYA"
                          - option "KKM HOSPITAL SELAYANG"
                          - option "KKM HOSPITAL SERDANG"
                          - option "KKM HOSPITAL SHAH ALAM"
                          - option "KKM HOSPITAL SUNGAI BULOH"
                          - option "KLINIK KELUARGA IMAN (IMAN MEDIGROUP SDN BHD)"
                          - option "KLINIK LIM"
                          - option "KLINIK LIM (DATARAN SUNWAY)"
                          - option "KLINIK MEDIVIRON (BISTARI DE KOTA)"
                          - option "KLINIK MEDIVIRON COVA SQUARE"
                          - option "KMI KELANA JAYA MEDICAL CENTRE SDN BHD"
                          - option "KOPERASI WAWASAN MALAYSIA BERHAD"
                          - option "KPJ AMPANG PUTERI SPECIALIST HOSPITAL"
                          - option "KPJ DAMANSARA SPECIALIST HOSPITAL"
                          - option "KPJ DAMANSARA SPECIALIST HOSPITAL 2"
                          - option "KPJ JOHOR SPECIALIST HOSPITAL"
                          - option "KPJ RAWANG SPECIALIST HOSPITAL"
                          - option "KPJ TAWAKKAL SPECIALIST HOSPITAL"
                          - option "KUMPULAN WANG PERSARAAN (DIPERBADANKAN)"
                          - option "KUMPULAN WANG SIMPANAN PEKERJA (KWSP) - MELAKA"
                          - option "KUMPULAN WANG SIMPANAN PEKERJA (KWSP) - SEREMBAN"
                          - option "KUMPULAN WANG SIMPANAN PEKERJA (KWSP) - SHAH ALAM"
                          - option "LABLINK SDN BHD"
                          - option "LABUAN REINSURANCE (L) LTD"
                          - option "LADANG RAKYAT TRENGGANU SDN.BHD"
                          - option "LAND & GENERAL BERHAD"
                          - option "LEMBAGA GETAH MALAYSIA"
                          - option "LEMBAGA HASIL DALAM NEGERI MALAYSIA"
                          - option "LEMBAGA PELABUHAN BINTULU (BINTULU PORT AUTHORITY)"
                          - option "MAGNA MAHSURI SDN BHD"
                          - option "MAJLIS BANDARAYA PETALING JAYA (BUKU RAWATAN)"
                          - option "MALAYSIA AIRLINES BERHAD C/O MICARE SDN BHD"
                          - option "MALAYSIAN AIRLINE SYSTEM BERHAD (MAS) C/O MICARE SDN BHD"
                          - option "MALAYSIAN COMMUNICATIONS AND MULTIMEDIA COMMISSION"
                          - option "MALAYSIAN EMPLOYERS FEDERATION"
                          - option "MALAYSIAN INVESTMENT DEVELOPMENT AUTHORITY"
                          - option "MALAYSIAN SHEET GLASS SDN BHD (NSG GROUP)"
                          - option "MALAYSIA-THAILAND JOINT AUTHORITY"
                          - option "MANULIFE INSURANCE BHD C/O INTEGRATED HEALTH PLANS (MALAYSIA) SDN BHD"
                          - option "MATERNITY DELIVERY VOUCHER"
                          - option "MAYBANK STAFF - P C/O ETIQA FAMILY TAKAFUL BERHAD"
                          - option "MAYBANK STAFF C/O ETIQA FAMILY TAKAFUL BERHAD"
                          - option "MBPJ - HEALTH SCREENING"
                          - option "MCC OVERSEAS (M) SDN BHD"
                          - option "MEDIA PRIMA BERHAD"
                          - option "MEDIEXPRESS (MALAYSIA) SDN BHD"
                          - option "MEDIEXPRESS SDN BHD (MBPJ)"
                          - option "MEDILINKGLOBAL (M) SDN BHD"
                          - option "MEDILOVE SS15 SDN BHD (KLINIK MEDILOVE)"
                          - option "MEDIVEST SDN BHD"
                          - option "MEDKAD SDN BHD"
                          - option "MICARE SDN BHD"
                          - option "MICARE SDN BHD C/O HONG LEONG ASSURANCE BERHAD"
                          - option "MICARE SDN BHD C/O MANULIFE INSURANCE BERHAD"
                          - option "MICARE SDN BHD C/O ZURICH GENERAL INSURANCE MALAYSIA BERHAD"
                          - option "MICARE SDN BHD C/O ZURICH GENERAL TAKAFUL MALAYSIA BERHAD"
                          - option "MIZUHO BANK (MALAYSIA) BERHAD"
                          - option "MK LAND HOLDINGS BERHAD"
                          - option "MONASH UNIVERSITY MALAYSIA SDN. BHD."
                          - option "MPI GENERALI INSURANS BERHAD"
                          - option "MSH INTERNATIONAL (CHINA)"
                          - option "MSH INTERNATIONAL(KUALA LUMPUR OFFICE)"
                          - option "MUFG BANK (MALAYSIA) BERHAD"
                          - option "MY MAGIC SDN. BHD. (MOLINA)"
                          - option "NAGOYA AUTOMOBILE MALAYSIA HOLDING SDN BHD"
                          - option "NATIONAL INSTITUTE OF OCCUPATIONAL SAFETY & HEALTH"
                          - option "NAZA ENERGIES SDN BHD"
                          - option "NOW HEALTH INTERNATIONAL"
                          - option "OBYU HOLDINGS SDN BHD"
                          - option "ONCOCARE MEDICAL MALAYSIA SDN. BHD"
                          - option "ONCOCARE STAFF (SELFPAY) - OP & IP"
                          - option "ONE HOPE CHARITY & WELFARE"
                          - option "P D KAWAMURA KAKO MANUFACTURING SDN BHD"
                          - option "PAKAR ANGSANA SDN BHD"
                          - option "PANASONIC MALAYSIA SDN BHD"
                          - option "PB TRUSTEE SERVICES BERHAD"
                          - option "PEJABAT SETIAUSAHA KERAJAAN NEGERI SELANGOR DARUL EHSAN"
                          - option "PEJABAT SETIAUSAHA KERAJAAN TERENGGANU"
                          - option "PELABURAN MARA BERHAD"
                          - option "PERBADANAN HAL EHWAL BEKAS ANGKATAN TENTERA"
                          - option "PERBADANAN INFAQ YAPEIM SDN BHD"
                          - option "PERBADANAN NASIONAL BERHAD"
                          - option "PERBADANAN TABUNG PENDIDIKAN TINGGI NASIONAL (PTPTN)"
                          - option "PERBADANAN USAHAWAN NASIONAL BERHAD"
                          - option "PERMODALAN NASIONAL BERHAD"
                          - option "PERODUA ENGINE MANUFACTURING SDN BHD"
                          - option "PERODUA GLOBAL MANUFACTURING SDN BHD"
                          - option "PERODUA MANUFACTURING SDN BHD"
                          - option "PERODUA SALES SDN BHD"
                          - option "PERODUA SALES SDN BHD (066332U)"
                          - option "PERTUBUHAN KESELAMATAN SOSIAL (CAW. RETURN TO WORK)"
                          - option "PERTUBUHAN KESELAMATAN SOSIAL (REHABILITASI)"
                          - option "PERTUBUHAN KESELAMATAN SOSIAL (SEHAT) BAHAGIAN PENCEGAHAN, PERUBATAN & PEMULIHAN"
                          - option "PERTUBUHAN PELADANG KEBANGSAAN (NAFAS)"
                          - option "PERUSAHAAN OTOMOBIL KEDUA SDN BHD"
                          - option "PETRA ENERGY BERHAD"
                          - option "PIHAK BERKUASA PENERBANGAN AWAM MALAYSIA (CAAM)"
                          - option "PIHAK BERKUASA PERLAKSANAAN KORIDOR UTARA"
                          - option "PMCARE SDN BHD"
                          - option "PMCARE SDN BHD (BANK NEGARA)"
                          - option "PNB COMMERCIAL SDN BHD"
                          - option "PRA ASSIST MEDICAL NETWORK SDN BHD"
                          - option "PREMIER INTEGRATED LABS SDN. BHD."
                          - option "PRESTIGE INTERNATIONAL (S) PTE LTD"
                          - option "PRIMER CHERANG CLINIC KOTA DAMANSARA SDN BHD"
                          - option "PROCTER & GAMBLE (MALAYSIA) SDN BHD"
                          - option "PROTECTHEALTH CORPORATION SDN.BHD."
                          - option "PRUDENTIAL ASSURANCE MALAYSIA BERHAD"
                          - option "PRUDENTIAL BSN TAKAFUL (INSURANCE MEDICAL-CHECK UP)"
                          - option "PRUDENTIAL BSN TAKAFUL BERHAD (PRUBSN HAS)"
                          - option "PT AA INTERNATIONAL INDONESIA"
                          - option "PTT SYNERGY GROUP BERHAD"
                          - option "PUBLIC BANK BERHAD (CAWANGAN BATANG KALI)"
                          - option "PUSAT HEMODIALISIS MAWAR (MAWAR MEDICAL CENTRE)"
                          - option "RADIBEMS SDN BHD"
                          - option "RAMSAY SIME DARBY HEALTH CARE SDN BHD"
                          - option "RANGE PHARMA SDN. BHD."
                          - option "SAPURA INDUSTRIAL BERHAD"
                          - option "SATO KOGYO (M) SDN BHD"
                          - option "SATO KOGYO CO., LTD."
                          - option "SCICOM (MSC) BERHAD"
                          - option "SECURITIES COMMISSION MALAYSIA"
                          - option "SEGI HEALTHCARE SDN BHD"
                          - option "SELANGOR SPECIALIST HOSPITAL SDN BHD"
                          - option "SELCARE MANAGEMENT SDN BHD"
                          - option "SELFPAY / CASH CUSTOMER"
                          - option "SELFPAYING - STAFF CASH BILL(IP STAFF)"
                          - option "SELFPAYING - STAFF CASH BILL(OP SPOUSE)"
                          - option "SELFPAYING - STAFF CASH BILL(OP STAFF)"
                          - option "SIME DARBY - JAGUAR LAND ROVER (MALAYSIA) SDN BHD"
                          - option "SIME DARBY AUTO BAVARIA SDN BHD"
                          - option "SIME DARBY AUTO CONNEXION SDN BHD"
                          - option "SIME DARBY AUTO HYUNDAI SDN BHD"
                          - option "SIME DARBY AUTO PERFORMANCE SDN BHD"
                          - option "SIME DARBY AUTO SELECTION SDN BHD"
                          - option "SIME DARBY BEYOND AUTO SDN BHD"
                          - option "SIME DARBY ENERGY SOLUTIONS SDN BHD"
                          - option "SIME DARBY HOLDINGS BERHAD"
                          - option "SIME DARBY INDUSTRIAL SDN BHD"
                          - option "SIME DARBY LOCKTON INSURANCE BROKERS SDN BHD"
                          - option "SIME DARBY PLANTATION BERHAD – KCP/NURI"
                          - option "SIME DARBY SWEDISH AUTO SDN. BHD."
                          - option "SIME PERFORMANCE MOTORS SDN BHD C/O SIME DARBY BERHAD"
                          - option "SPERM & OOCYTE DONOR"
                          - option "SRI DAMANSARA SDN BHD"
                          - option "SRI KDU SDN BHD"
                          - option "SRI KOTA SPECIALIST MEDICAL CENTRE"
                          - option "STAR MEDIA RADIO GROUP SDN.BHD."
                          - option "STM LOTTERY SDN BHD"
                          - option "SUNWAY TCM SDN BHD"
                          - option "TA PROPERTIES SDN BHD"
                          - option "TDMC HOSPITAL SDN.BHD"
                          - option "TEJANI EMERGENCY ASSISTANCE MALAYSIA"
                          - option "TENAGA NASIONAL BERHAD"
                          - option "TENAGA SWITCHGEAR SDN BHD"
                          - option "THE EDGE COMMUNICATIONS SDN BHD"
                          - option "THE PACIFIC INSURANCE BERHAD"
                          - option "THOMSON GP+ MEMBER"
                          - option "THOMSON HOSPITALS SDN BHD"
                          - option "THOMSON HOSPITALS SDN BHD C/O MICARE"
                          - option "TMC (OP DEPENDANT BENEFIT)"
                          - option "TMC BOARDS OF DIRECTOR"
                          - option "TMC BOARDS OF DIRECTOR (FAMILY MEMBER)"
                          - option "TMC CONSULTANT (IP)"
                          - option "TMC CONSULTANT (OP)"
                          - option "TMC GOLD PRIVILEGE MEMBERSHIP"
                          - option "TMC IP (SPOUSE/PARENTS/PARENTS-IN-LAW/CHILD)"
                          - option "TMC KIDS CLUB"
                          - option "TMC LIFESTYLE (M) SDN BHD"
                          - option "TMC OP (SPOUSE/PARENTS/PARENTS-IN-LAW/CHILD)"
                          - option "TMC STAFF HEALTH (OP)"
                          - option "TMC STAFF IP (MATERNITY)"
                          - option "TMC STAFF IP (SELF-PAYING)"
                          - option "TMC STAFF OP (SELF-PAYING)"
                          - option "TMC STAFF VACCINATION"
                          - option "TOKIO MARINE INSURANCE (M) BHD"
                          - option "TOKIO MARINE INSURANS (MALAYSIA) BERHAD C/O MICARE"
                          - option "TOKIO MARINE LIFE INSURANCE MALAYSIA BHD C/O MICARE SDN BHD"
                          - option "TOSHIBA ELEVATOR (MALAYSIA) SDN BHD"
                          - option "TRACTORS PETROLEUM SERVICES SDN BHD C/O SIME DARBY"
                          - option "TRADEWINDS INTERNATIONAL INSURANCE BROKERS SDN BHD"
                          - option "TUNKU ABDUL RAHMAN UNIVERSITY OF MANAGEMENT AND TECHNOLOGY"
                          - option "TUNKU AZIZAH FERTILITY FOUNDATION"
                          - option "UDA DAYAURUS SDN BHD"
                          - option "UDA HOLDINGS BERHAD"
                          - option "UITM PRIVATE HEALTHCARE SDN BHD"
                          - option "ULINK ASSIST PTE LTD"
                          - option "UNIT PERANCANG EKONOMI NEGERI"
                          - option "UNIVERSITI KUALA LUMPUR"
                          - option "UQPAY SDN. BHD."
                          - option "VSTECS ASTAR SDN BHD"
                          - option "VSTECS KU SDN BHD (ECS KU SDN BHD)"
                          - option "VSTECS KUSH SDN BHD"
                          - option "VSTECS PERICOMP SDN BHD"
                          - option "WILLIAM RUSSELL LTD"
                          - option "WOMEN’S SPECIALIST HOLDINGS SDN BHD"
                          - option "WORLD HEALTH ORGANIZATION"
                          - option "XTREME MERIDIAN SDN BHD"
                          - option "YAYASAN PEMBANGUNAN EKONOMI ISLAM MALAYSIA"
                          - option "YAYASAN SIME DARBY"
                          - option "ZURICH INSURANCE C/O INTEGRATED HEALTH PLANS (MALAYSIA) SDN BHD"
                      - generic [ref=e468]:
                        - generic [ref=e469]: Occupation
                        - combobox [ref=e471]:
                          - option "--Select--" [selected]
                      - generic [ref=e473]:
                        - generic [ref=e474]:
                          - text: Mobile No
                          - text: "*"
                        - generic [ref=e476]:
                          - combobox [ref=e478]:
                            - option "Code" [selected]
                          - textbox "Mobile" [ref=e480]
                      - generic [ref=e482]:
                        - generic [ref=e483]: Phone No
                        - generic [ref=e485]:
                          - textbox [ref=e487]
                          - textbox "Mobile" [ref=e489]
                      - generic [ref=e491]:
                        - generic [ref=e492]: E-mail
                        - textbox [ref=e494]
                      - generic [ref=e496]:
                        - generic [ref=e497]: Legal Guardian
                        - textbox "Enter legal guardian name" [ref=e499]
                      - generic [ref=e501] [cursor=pointer]:
                        - checkbox "Same As Patient Address" [ref=e502]
                        - text: Same As Patient Address
                      - generic [ref=e504]:
                        - generic [ref=e505]: Address Line 1 *
                        - textbox [ref=e507]
                      - generic [ref=e509]:
                        - generic [ref=e510]: Address Line 2
                        - textbox [ref=e512]
                      - generic [ref=e514]:
                        - generic [ref=e515]: Address Line 3
                        - textbox [ref=e517]
                      - generic [ref=e519]:
                        - generic [ref=e520]: Postcode
                        - textbox [ref=e522]
                      - generic [ref=e524]:
                        - generic [ref=e525]: City / District
                        - combobox [ref=e527]:
                          - option "--Select--" [selected]
                      - generic [ref=e529]:
                        - generic [ref=e530]: State*
                        - combobox [ref=e532]:
                          - option "--Select--" [selected]
                      - generic [ref=e534]:
                        - generic [ref=e535]: Country*
                        - combobox [ref=e537]:
                          - option "--Select--" [selected]
                      - generic [ref=e539]:
                        - generic [ref=e540]: Remarks
                        - textbox [ref=e542]
                  - generic [ref=e543]:
                    - button "Add" [ref=e544] [cursor=pointer]
                    - button "Modify" [disabled] [ref=e545]
                    - button "Cancel" [ref=e546] [cursor=pointer]
        - generic [ref=e547]:
          - tab "Payor Information" [ref=e548]:
            - button "Payor Information" [ref=e549] [cursor=pointer]
          - text: 
        - text:  
      - generic [ref=e550]:
        - tab "Visit Information" [ref=e551]:
          - button "Visit Information" [expanded] [ref=e552] [cursor=pointer]
        - text:  
        - generic [ref=e553]:
          - generic [ref=e554]:
            - generic [ref=e557] [cursor=pointer]:
              - checkbox "Register Only" [ref=e558]
              - text: Register Only
            - generic [ref=e561] [cursor=pointer]:
              - checkbox "Charges Only" [checked] [ref=e562]
              - text: Charges Only
          - generic [ref=e564]:
            - generic [ref=e565]:
              - generic [ref=e567]:
                - generic [ref=e568]: Sign
                - button "Clear" [ref=e575] [cursor=pointer]
              - checkbox [ref=e576]
              - text: Cash
              - checkbox [checked] [ref=e577]
              - text: Credit
            - generic [ref=e578]:
              - button "Consent" [ref=e579] [cursor=pointer]
              - button "Patient History" [disabled] [ref=e580]
              - button "Save" [ref=e581] [cursor=pointer]
              - button "Clear" [ref=e582] [cursor=pointer]
        - text:  
  - textbox [ref=e584]
```

# Test source

```ts
  1  | // ============================================================
  2  | // tests/ui/op-registration.spec.ts
  3  | // ============================================================
  4  | import { test, expect } from '@playwright/test';
  5  | import { LoginPage } from '../../pages/LoginPage';
  6  | import { OPPage } from '../../pages/OPPage';
  7  | import { RegistrationPage } from '../../pages/RegistrationPage';
  8  | import { ENV } from '../../utils/env';
  9  | import { RegistrationDataGenerator } from '../../utils/registrationData';
  10 | import * as fs from 'fs';
  11 | import * as path from 'path';
  12 | 
  13 | 
  14 | test('KPJ OP Registration Flow', async ({ page }) => {
  15 | 
  16 |   const login        = new LoginPage(page);
  17 |   const op           = new OPPage(page);
  18 |   const registration = new RegistrationPage(page);
  19 | 
  20 |   // ── Step 1: Go to Login page ────────────────────────────
  21 |   await page.goto(`${ENV.BASE_URL}/Account/Login/`, {
  22 |     waitUntil: 'domcontentloaded',
  23 |   });
  24 | 
  25 |   // ── Step 2: Login ────────────────────────────────────────
  26 |   // Fills credentials + mandatory dropdowns + waits for PatientDashboard
  27 |   await login.login(ENV.USERNAME, ENV.PASSWORD);
  28 | 
  29 |   // ── Step 3: Navigate OP → Registration ──────────────────
  30 |   // Clicks #li0OP > a, waits for submenu, clicks #li1PatientRegistration
  31 |   await op.openRegistration();
  32 |   // await page.waitForURL('**/PatientDashboard', {
  33 |   //   waitUntil: 'domcontentloaded',
  34 |   // });
  35 | 
> 36 | test.describe('Patient Registration', () => {
     |      ^ Error: Playwright Test did not expect test.describe() to be called here.
  37 |   
  38 |   test('Fill Registration Page with Dynamic Patient Name', async ({ page }) => {
  39 |     
  40 |     // 1. Generate dynamic data
  41 |     // Using a timestamp ensures the name is unique every single time the script runs.
  42 |     const timestamp = Date.now();
  43 |     const dynamicPatientName = `PATIENT_${timestamp}`;
  44 | 
  45 |     // 2. Store the dynamic data
  46 |     // Save the generated name to a local JSON file so it can be referenced later or tracked.
  47 |     const dataPath = path.join(__dirname, '../dynamic-data.json');
  48 |     fs.writeFileSync(dataPath, JSON.stringify({ latestPatientName: dynamicPatientName }, null, 2));
  49 |     console.log(`Generated and stored Dynamic Patient Name: ${dynamicPatientName}`);
  50 | 
  51 |     // 3. Navigate to the registration page
  52 |     // Playwright automatically prepends the BASE_URL from your .env file
  53 |     await page.goto('/your-registration-endpoint'); // Update with the actual page path
  54 | 
  55 |     // 4. Locate and interact with the specific input field
  56 |     // We use the exact ID "txtFirstName" from your provided HTML snippet
  57 |     const firstNameInput = page.locator('#txtFirstName');
  58 | 
  59 |     // Wait for the input to be visible and ready
  60 |     await firstNameInput.waitFor({ state: 'visible' });
  61 | 
  62 |     // 5. Fill the input field with the dynamic name
  63 |     await firstNameInput.fill(dynamicPatientName);
  64 | 
  65 |     // 6. Verify the field contains the exact dynamic data
  66 |     // We convert the expected string to uppercase because your HTML snippet includes `onkeyup="this.value = this.value.toUpperCase();"`
  67 |     const expectedValueInDOM = dynamicPatientName.toUpperCase();
  68 |     await expect(firstNameInput).toHaveValue(expectedValueInDOM);
  69 |     
  70 |     // Continue with the rest of your form submission...
  71 |   });
  72 | 
  73 | });
  74 | 
  75 |   // ── Step 4: Fill Patient Details ───────────────────────
  76 |   // await registration.fillPatientDetails();
  77 | 
  78 |   // ── Step 5: Fill Address ─────────────────────────────────
  79 |   //await registration.fillAddress();
  80 | 
  81 |   // ── Step 6: Fill Visit Details ───────────────────────────
  82 |   //await registration.fillVisitDetails();
  83 | 
  84 |   // ── Step 8: Save ─────────────────────────────────────────
  85 |   //await registration.clickSave();
  86 | 
  87 |   // ── Step 9: Assert success ───────────────────────────────
  88 |  // await registration.validateSuccess();
  89 | });
  90 | 
```
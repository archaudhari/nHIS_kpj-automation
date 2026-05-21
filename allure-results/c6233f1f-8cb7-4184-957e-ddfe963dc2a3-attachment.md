# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui\op-registration.spec.ts >> KPJ OP Registration Flow
- Location: tests\ui\op-registration.spec.ts:14:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('text=Patient Information') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner:
      - text:  
      - navigation [ref=e3]:
        - generic [ref=e4]:
          - heading "Patient Dashboard" [level=1] [ref=e6]
          - list [ref=e8]:
            - listitem [ref=e9]:
              - generic [ref=e10]: "Welcome: Employee 1338:(KPJ)"
            - listitem [ref=e11]:
              - generic [ref=e12]: "Last Login : 22/05/2026 01:41:21"
            - listitem [ref=e13]:
              - link " 286" [ref=e15] [cursor=pointer]:
                - /url: "#/InternalMessaging"
                - generic [ref=e16]: 
                - generic [ref=e17]: "286"
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
          - link "IP" [ref=e38] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e39]: IP
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
          - link "Emergency" [ref=e73] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e74]: Emergency
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
    - main [ref=e113]:
      - generic [ref=e114]:
        - generic [ref=e115]:
          - generic [ref=e116]:
            - generic [ref=e119]:
              - generic [ref=e120]: From
              - textbox "dd/MM/yyyy" [ref=e123]: 21/05/2026
            - generic [ref=e126]:
              - generic [ref=e127]: To
              - textbox "dd/MM/yyyy" [ref=e130]: 21/05/2026
            - separator [ref=e131]
            - generic [ref=e134]:
              - heading "0" [level=1] [ref=e135]
              - heading "TOTAL NO. OF APPOINTMENTS" [level=5] [ref=e136]
            - generic [ref=e139]:
              - heading "0" [level=1] [ref=e140]
              - heading "PENDING APPOINTMENTS" [level=5] [ref=e141]
            - generic [ref=e144]:
              - heading "0" [level=1] [ref=e145]
              - heading "CONFIRMED APPOINTMENTS" [level=5] [ref=e146]
            - generic [ref=e149]:
              - heading "12" [level=1] [ref=e150]
              - heading "TOTAL NO. OF REGISTERED PATIENTS" [level=5] [ref=e151]
            - generic [ref=e154]:
              - 'heading "PATIENT JOURNEY : TAT (30 Min)" [level=5] [ref=e155]':
                - text: "PATIENT JOURNEY :"
                - strong [ref=e156]: TAT (30 Min)
              - 'heading "WITHIN TAT : (27)" [level=5] [ref=e157]':
                - text: "WITHIN TAT :"
                - strong [ref=e158]: (27)
              - 'heading "EXCEEDING TAT : (03)" [level=5] [ref=e159]':
                - text: "EXCEEDING TAT :"
                - strong [ref=e160]: (03)
          - generic [ref=e162]:
            - generic [ref=e164]:
              - heading "patient journey" [level=3] [ref=e166]
              - generic [ref=e169]:
                - img [ref=e170]:
                  - generic [ref=e171]:
                    - generic [ref=e189]:
                      - generic [ref=e190]: 55 %
                      - generic [ref=e191]: 32 %
                      - generic [ref=e192]: 14 %
                      - generic [ref=e193]: 0 %
                      - generic [ref=e194]: 0 %
                    - generic [ref=e195]:
                      - generic [ref=e203]: Registration
                      - generic [ref=e204]: Queue
                      - generic [ref=e205]: Consultation
                      - generic [ref=e206]: Pharmacy
                      - generic [ref=e207]: Billing
                - img [ref=e208]
            - generic [ref=e220]:
              - heading "diagnosis trend" [level=3] [ref=e222]
              - generic [ref=e225]:
                - img [ref=e226]
                - img [ref=e232]
            - generic [ref=e234]:
              - heading "pharmacy dispense completed / pending" [level=3] [ref=e236]
              - generic [ref=e239]:
                - img [ref=e240]
                - img [ref=e246]
            - generic [ref=e248]:
              - heading "Billing" [level=3] [ref=e250]
              - generic [ref=e253]:
                - img [ref=e254]
                - img [ref=e260]
            - generic [ref=e262]:
              - heading "Critical Bed Shortage" [level=3] [ref=e264]
              - table [ref=e266]:
                - rowgroup [ref=e267]:
                  - row "Ward Available Beds Occupied Beds Total Beds" [ref=e268]:
                    - columnheader "Ward" [ref=e269]
                    - columnheader "Available Beds" [ref=e270]
                    - columnheader "Occupied Beds" [ref=e271]
                    - columnheader "Total Beds" [ref=e272]
                - rowgroup [ref=e273]:
                  - row "Ward OG 10 20 30" [ref=e274]:
                    - cell "Ward OG" [ref=e275]
                    - cell "10" [ref=e276]
                    - cell "20" [ref=e277]
                    - cell "30" [ref=e278]
                  - row "Ward PD 15 11 26" [ref=e279]:
                    - cell "Ward PD" [ref=e280]
                    - cell "15" [ref=e281]
                    - cell "11" [ref=e282]
                    - cell "26" [ref=e283]
                  - row "CCU 8 3 11" [ref=e284]:
                    - cell "CCU" [ref=e285]
                    - cell "8" [ref=e286]
                    - cell "3" [ref=e287]
                    - cell "11" [ref=e288]
                  - row "ICU 4 2 6" [ref=e289]:
                    - cell "ICU" [ref=e290]
                    - cell "4" [ref=e291]
                    - cell "2" [ref=e292]
                    - cell "6" [ref=e293]
              - generic [ref=e294]: Critical Bed Shortage
            - generic [ref=e296]:
              - heading "Operational & Efficiency KPIs" [level=3] [ref=e298]
              - generic [ref=e299]:
                - generic [ref=e301]:
                  - generic [ref=e302]: Average Patient Wait Time
                  - generic [ref=e305]:
                    - img [ref=e306]:
                      - generic [ref=e307]:
                        - generic [ref=e309]:
                          - generic [ref=e328]: "0"
                          - generic [ref=e329]: "200"
                          - generic [ref=e330]: "400"
                          - generic [ref=e331]: "600"
                          - generic [ref=e332]: "800"
                          - generic [ref=e333]: "1000"
                        - generic [ref=e335]: "941"
                    - img [ref=e336]
                  - generic [ref=e337]: 941:42 MINS
                - generic [ref=e339]:
                  - generic [ref=e340]: Average Length of Stay
                  - generic [ref=e343]:
                    - img [ref=e344]:
                      - generic [ref=e345]:
                        - generic [ref=e347]:
                          - generic [ref=e366]: "0"
                          - generic [ref=e367]: "2"
                          - generic [ref=e368]: "4"
                          - generic [ref=e369]: "6"
                          - generic [ref=e370]: "8"
                          - generic [ref=e371]: "10"
                        - generic [ref=e373]: "0"
                    - img [ref=e374]
                  - generic [ref=e375]: 0 DAYS
                - generic [ref=e377]:
                  - generic [ref=e378]: Average Door to Doctor Time
                  - generic [ref=e381]:
                    - img [ref=e382]:
                      - generic [ref=e383]:
                        - generic [ref=e385]:
                          - generic [ref=e404]: "0"
                          - generic [ref=e405]: "18"
                          - generic [ref=e406]: "36"
                          - generic [ref=e407]: "54"
                          - generic [ref=e408]: "72"
                          - generic [ref=e409]: "90"
                        - generic [ref=e411]: "0"
                    - img [ref=e412]
                  - generic [ref=e413]: 00:00 MINS
                - generic [ref=e415]:
                  - generic [ref=e416]: 
                  - generic [ref=e417]: Bed Occupancy Rate
                  - generic [ref=e420]:
                    - img [ref=e421]:
                      - generic [ref=e434]:
                        - generic [ref=e435]: 0%
                        - generic [ref=e436]: 100%
                        - generic [ref=e437]: 29.8%
                    - img [ref=e438]
                  - generic [ref=e440]:
                    - generic [ref=e443]: Target Achieved
                    - generic [ref=e446]: Needs Attention
                    - generic [ref=e449]: Off Target
                - generic [ref=e451]:
                  - generic [ref=e452]: 
                  - generic [ref=e453]: Percentage of Referrals Out
                  - generic [ref=e456]:
                    - img [ref=e457]:
                      - generic [ref=e470]:
                        - generic [ref=e471]: 0%
                        - generic [ref=e472]: 100%
                        - generic [ref=e473]: 0.0%
                    - img [ref=e474]
                  - generic [ref=e476]:
                    - generic [ref=e479]: Target Achieved
                    - generic [ref=e482]: Needs Attention
                    - generic [ref=e485]: Off Target
                - generic [ref=e487]:
                  - generic [ref=e488]: 
                  - generic [ref=e489]: Percentage of Patients Leaving Without Being Seen (LWBS)
                  - generic [ref=e492]:
                    - img [ref=e493]:
                      - generic [ref=e506]:
                        - generic [ref=e507]: 0%
                        - generic [ref=e508]: 100%
                        - generic [ref=e509]: 41.7%
                    - img [ref=e510]
                - generic [ref=e512]:
                  - generic [ref=e513]: 
                  - generic [ref=e514]: Bed Turnover Rate
                  - generic [ref=e517]:
                    - img [ref=e518]:
                      - generic [ref=e531]:
                        - generic [ref=e532]: 0%
                        - generic [ref=e533]: 100%
                        - generic [ref=e534]: 1.0%
                    - img [ref=e535]
                  - generic [ref=e537]:
                    - generic [ref=e540]: Target Achieved
                    - generic [ref=e543]: Needs Attention
                    - generic [ref=e546]: Off Target
                - generic [ref=e548]:
                  - generic [ref=e549]: Average Registration Time
                  - generic [ref=e552]:
                    - img [ref=e553]:
                      - generic [ref=e554]:
                        - generic [ref=e556]:
                          - generic [ref=e575]: "0"
                          - generic [ref=e576]: "12"
                          - generic [ref=e577]: "24"
                          - generic [ref=e578]: "36"
                          - generic [ref=e579]: "48"
                          - generic [ref=e580]: "60"
                        - generic [ref=e582]: "0"
                    - img [ref=e583]
                  - generic [ref=e584]: 00:00 MINS
            - generic [ref=e586]:
              - heading "Quality & Patient Satisfaction" [level=3] [ref=e588]
              - generic [ref=e589]:
                - generic [ref=e591]:
                  - generic [ref=e592]: Patient Satisfaction Score
                  - generic [ref=e594]: ☆☆☆☆☆
                  - generic [ref=e597]:
                    - generic [ref=e598]: "1"
                    - generic [ref=e599]: "2"
                    - generic [ref=e600]: "3"
                    - generic [ref=e601]: "4"
                    - generic [ref=e602]: "5"
                  - generic [ref=e603]: 0.0 /5
                - generic [ref=e605]:
                  - generic [ref=e606]: 
                  - generic [ref=e607]: At Own Risk (AOR) Rate
                  - generic [ref=e610]:
                    - img [ref=e611]:
                      - generic [ref=e624]:
                        - generic [ref=e625]: 0%
                        - generic [ref=e626]: 100%
                        - generic [ref=e627]: 0.0%
                    - img [ref=e628]
                - generic [ref=e630]:
                  - generic [ref=e631]: 
                  - generic [ref=e632]: Patient Eligibility Accuracy Rate
                  - generic [ref=e635]:
                    - img [ref=e636]:
                      - generic [ref=e649]:
                        - generic [ref=e650]: 0%
                        - generic [ref=e651]: 100%
                        - generic [ref=e652]: 0.0%
                    - img [ref=e653]
                - generic [ref=e655]:
                  - generic [ref=e656]: 
                  - generic [ref=e657]: Appointment Cancellation / No-Show Rate
                  - generic [ref=e660]:
                    - img [ref=e661]:
                      - generic [ref=e674]:
                        - generic [ref=e675]: 0%
                        - generic [ref=e676]: 100%
                        - generic [ref=e677]: 0.0%
                    - img [ref=e678]
            - generic [ref=e680]:
              - heading "Financial KPIs" [level=3] [ref=e682]
              - generic [ref=e683]:
                - generic [ref=e685]:
                  - generic [ref=e686]: 
                  - generic [ref=e687]: Claim Denial Rate
                  - generic [ref=e690]:
                    - img [ref=e691]:
                      - generic [ref=e704]:
                        - generic [ref=e705]: 0%
                        - generic [ref=e706]: 100%
                        - generic [ref=e707]: 0.0%
                    - img [ref=e708]
                - generic [ref=e710]:
                  - generic [ref=e711]: Revenue Cycle Length
                  - generic [ref=e714]:
                    - img [ref=e715]:
                      - generic [ref=e716]:
                        - generic [ref=e718]:
                          - generic [ref=e737]: "0"
                          - generic [ref=e738]: "12"
                          - generic [ref=e739]: "24"
                          - generic [ref=e740]: "36"
                          - generic [ref=e741]: "48"
                          - generic [ref=e742]: "60"
                        - generic [ref=e744]: "0"
                    - img [ref=e745]
                  - generic [ref=e746]: 0 DAYS
        - text:     
  - textbox [ref=e748]
  - generic [ref=e749]: 0 %
  - generic [ref=e750]: "941"
  - generic [ref=e751]: "0"
  - generic [ref=e752]: "0"
  - generic [ref=e753]: 70%
  - generic [ref=e754]: 100%
  - generic [ref=e755]: 58%
  - generic [ref=e756]: 99%
  - generic [ref=e757]: "0"
  - generic [ref=e758]: 100%
  - generic [ref=e759]: 100%
  - generic [ref=e760]: 0.0%
  - generic [ref=e761]: 0.0%
  - generic [ref=e762]: "0"
```

# Test source

```ts
  1  | // ============================================================
  2  | // pages/OPPage.ts
  3  | // ============================================================
  4  | import { Page } from '@playwright/test';
  5  | 
  6  | export class OPPage {
  7  |   constructor(private page: Page) {}
  8  | 
  9  |   // ── Locators (confirmed from DOM inspection) ─────────────
  10 |   //    Source: <li class="treeview treeview-width" id="li0OP">
  11 |   //              <a href="#" onclick="SetTitleOfHTMLView(/OP/,25)...">
  12 |   //                <span class="menu-text">OP</span>
  13 |   //              </a>
  14 |   //            <li id="li1PatientRegistration" onclick="SetTitleOfHTMLView(/Registration/,27)">
  15 |   private opMenu      = '#li0OP > a';
  16 |   private regMenuItem = '#li1PatientRegistration';
  17 | 
  18 |   // ── openRegistration() ───────────────────────────────────
  19 |   async openRegistration() {
  20 | 
  21 |     // Step 1: Click the OP top-nav item
  22 |     //   TODO: If your test environment has a different li ID for OP,
  23 |     //         update '#li0OP > a' to match. Check: DevTools → inspect OP link → copy id.
  24 |     await this.page.locator(this.opMenu).click();
  25 | 
  26 |     // Step 2: Wait for the Registration submenu item to become visible
  27 |     //   The treeview-menu expands after the click — we wait for the exact
  28 |     //   element rather than using a fixed timeout.
  29 |     //   TODO: If Registration still isn't found, open DevTools while the
  30 |     //         submenu is open and confirm the li id is 'li1PatientRegistration'.
  31 |     await this.page.locator(this.regMenuItem).waitFor({
  32 |       state: 'visible',
  33 |       timeout: 5000,
  34 |     });
  35 | 
  36 |     // Step 3: Click Registration
  37 |     await this.page.locator(this.regMenuItem).click();
  38 | 
  39 |     // Step 4: Confirm the Registration page has loaded
  40 |     //   TODO: If the heading text is different (e.g. 'New Patient' or 'OP Registration'),
  41 |     //         update the selector below to match what appears on screen.
> 42 |     await this.page.waitForSelector('text=Patient Information', {
     |                     ^ TimeoutError: page.waitForSelector: Timeout 15000ms exceeded.
  43 |       state: 'visible',
  44 |       timeout: 15000,
  45 |     });
  46 | 
  47 |     console.log('✅ Successfully navigated to OP > Registration');
  48 |   }
  49 | }
  50 | 
```
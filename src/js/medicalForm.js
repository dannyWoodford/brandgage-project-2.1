// const nav = document.querySelector('nav')
// const contentContainer = document.querySelector('.content')
// const medicalInfoForm = document.querySelector('#medical-form')


nav.addEventListener('click', (e) => {

    const mirf = e.target.closest('#mirf-link')


    if (mirf) {
        showContentAndCloseNav()

        contentContainer.innerHTML = `
        <div class="medical-info-form">

            <div class="medical-info-form__container">
                <div class="medical-info-form__container__text ">
                    <p id="medical-form-title">Medical Information Request Form</p>
                    <p id="medical-form-info">For medical inquiries please complete the form and click “Submit” at the bottom of the page.</p>
                </div>
                
                    <form  id="medical-form">
                            <!-- row 1------------------------------------------ -->
                            <div class="form-row"> 
                                <div class="form-column">
                                    <label for="first-name"><span class="required-field">*</span>First Name</label>
                                    <input type="text"  name="firstName" required>
                                </div>
                                <div class="form-column">
                                    <label for="last-name"><span class="required-field">*</span>Last Name</label>
                                    <input type="text"  name="lastName" required>
                                </div>
                                <div class="form-column">
                                    <label for="email"><span class="required-field">*</span>Email</label>
                                    <input type="email"  name="email" required>
                                </div>
                            </div>
                            <!-- row 2------------------------------------------ -->
                            <div class="form-row">
                                <div class="form-column">
                                    <label for="company"><span class="required-field">*</span>Company / Institution</label>
                                    <input type="text"  name="company" required>
                                </div>
                                <div class="form-column">
                                    <label for="title">Title</label>
                                    <input type="text"  name="title">
                                </div>
                                <div class="form-column">
                                    <label for="phone-number">Phone Number</label>
                                    <input type="text"  name="phoneNumber">
                                </div>
                            </div>
                            <!-- row 3------------------------------------------ -->
                            <div class="form-row">
                                <div class="form-column">
                                    <label for="address">Address</label>
                                    <input type="text"  name="address">
                                </div>
                                <!-- <div class="form-column">
                                    <label for="city"><span class="required-field">*</span>City</label>
                                    <input type="text"  name="city">
                                </div> -->
                                <div class="form-column">
                                    <label for="state">State/Province</label>
                                    <select name="state">
                                        <option ></option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>				
                                </div>
                            </div>
                            <!-- row 4------------------------------------------ -->
                            <div class="form-row">
                                <div class="form-column">
                                    <label for="zip">ZIP</label>
                                    <input type="text"  name="zip">
                                </div>
                                <div class="form-column">
                                    <label for="country"><span class="required-field">*</span>Country</label>
                                    <select  name="country" required>
                                        <option ></option>
                                        <option value="US">United States</option>
                                        <option value="AF">Afghanistan</option>
                                        <option value="AX">Åland Islands</option>
                                        <option value="AL">Albania</option>
                                        <option value="DZ">Algeria</option>
                                        <option value="AS">American Samoa</option>
                                        <option value="AD">Andorra</option>
                                        <option value="AO">Angola</option>
                                        <option value="AI">Anguilla</option>
                                        <option value="AQ">Antarctica</option>
                                        <option value="AG">Antigua and Barbuda</option>
                                        <option value="AR">Argentina</option>
                                        <option value="AM">Armenia</option>
                                        <option value="AW">Aruba</option>
                                        <option value="AU">Australia</option>
                                        <option value="AT">Austria</option>
                                        <option value="AZ">Azerbaijan</option>
                                        <option value="BS">Bahamas</option>
                                        <option value="BH">Bahrain</option>
                                        <option value="BD">Bangladesh</option>
                                        <option value="BB">Barbados</option>
                                        <option value="BY">Belarus</option>
                                        <option value="BE">Belgium</option>
                                        <option value="BZ">Belize</option>
                                        <option value="BJ">Benin</option>
                                        <option value="BM">Bermuda</option>
                                        <option value="BT">Bhutan</option>
                                        <option value="BO">Bolivia, Plurinational State of</option>
                                        <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="BA">Bosnia and Herzegovina</option>
                                        <option value="BW">Botswana</option>
                                        <option value="BV">Bouvet Island</option>
                                        <option value="BR">Brazil</option>
                                        <option value="IO">British Indian Ocean Territory</option>
                                        <option value="BN">Brunei Darussalam</option>
                                        <option value="BG">Bulgaria</option>
                                        <option value="BF">Burkina Faso</option>
                                        <option value="BI">Burundi</option>
                                        <option value="KH">Cambodia</option>
                                        <option value="CM">Cameroon</option>
                                        <option value="CA">Canada</option>
                                        <option value="CV">Cape Verde</option>
                                        <option value="KY">Cayman Islands</option>
                                        <option value="CF">Central African Republic</option>
                                        <option value="TD">Chad</option>
                                        <option value="CL">Chile</option>
                                        <option value="CN">China</option>
                                        <option value="CX">Christmas Island</option>
                                        <option value="CC">Cocos (Keeling) Islands</option>
                                        <option value="CO">Colombia</option>
                                        <option value="KM">Comoros</option>
                                        <option value="CG">Congo</option>
                                        <option value="CD">Congo, the Democratic Republic of the</option>
                                        <option value="CK">Cook Islands</option>
                                        <option value="CR">Costa Rica</option>
                                        <option value="CI">Côte d'Ivoire</option>
                                        <option value="HR">Croatia</option>
                                        <option value="CU">Cuba</option>
                                        <option value="CW">Curaçao</option>
                                        <option value="CY">Cyprus</option>
                                        <option value="CZ">Czech Republic</option>
                                        <option value="DK">Denmark</option>
                                        <option value="DJ">Djibouti</option>
                                        <option value="DM">Dominica</option>
                                        <option value="DO">Dominican Republic</option>
                                        <option value="EC">Ecuador</option>
                                        <option value="EG">Egypt</option>
                                        <option value="SV">El Salvador</option>
                                        <option value="GQ">Equatorial Guinea</option>
                                        <option value="ER">Eritrea</option>
                                        <option value="EE">Estonia</option>
                                        <option value="ET">Ethiopia</option>
                                        <option value="FK">Falkland Islands (Malvinas)</option>
                                        <option value="FO">Faroe Islands</option>
                                        <option value="FJ">Fiji</option>
                                        <option value="FI">Finland</option>
                                        <option value="FR">France</option>
                                        <option value="GF">French Guiana</option>
                                        <option value="PF">French Polynesia</option>
                                        <option value="TF">French Southern Territories</option>
                                        <option value="GA">Gabon</option>
                                        <option value="GM">Gambia</option>
                                        <option value="GE">Georgia</option>
                                        <option value="DE">Germany</option>
                                        <option value="GH">Ghana</option>
                                        <option value="GI">Gibraltar</option>
                                        <option value="GR">Greece</option>
                                        <option value="GL">Greenland</option>
                                        <option value="GD">Grenada</option>
                                        <option value="GP">Guadeloupe</option>
                                        <option value="GU">Guam</option>
                                        <option value="GT">Guatemala</option>
                                        <option value="GG">Guernsey</option>
                                        <option value="GN">Guinea</option>
                                        <option value="GW">Guinea-Bissau</option>
                                        <option value="GY">Guyana</option>
                                        <option value="HT">Haiti</option>
                                        <option value="HM">Heard Island and McDonald Islands</option>
                                        <option value="VA">Holy See (Vatican City State)</option>
                                        <option value="HN">Honduras</option>
                                        <option value="HK">Hong Kong</option>
                                        <option value="HU">Hungary</option>
                                        <option value="IS">Iceland</option>
                                        <option value="IN">India</option>
                                        <option value="ID">Indonesia</option>
                                        <option value="IR">Iran, Islamic Republic of</option>
                                        <option value="IQ">Iraq</option>
                                        <option value="IE">Ireland</option>
                                        <option value="IM">Isle of Man</option>
                                        <option value="IL">Israel</option>
                                        <option value="IT">Italy</option>
                                        <option value="JM">Jamaica</option>
                                        <option value="JP">Japan</option>
                                        <option value="JE">Jersey</option>
                                        <option value="JO">Jordan</option>
                                        <option value="KZ">Kazakhstan</option>
                                        <option value="KE">Kenya</option>
                                        <option value="KI">Kiribati</option>
                                        <option value="KP">Korea, Democratic People's Republic of</option>
                                        <option value="KR">Korea, Republic of</option>
                                        <option value="KW">Kuwait</option>
                                        <option value="KG">Kyrgyzstan</option>
                                        <option value="LA">Lao People's Democratic Republic</option>
                                        <option value="LV">Latvia</option>
                                        <option value="LB">Lebanon</option>
                                        <option value="LS">Lesotho</option>
                                        <option value="LR">Liberia</option>
                                        <option value="LY">Libya</option>
                                        <option value="LI">Liechtenstein</option>
                                        <option value="LT">Lithuania</option>
                                        <option value="LU">Luxembourg</option>
                                        <option value="MO">Macao</option>
                                        <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                        <option value="MG">Madagascar</option>
                                        <option value="MW">Malawi</option>
                                        <option value="MY">Malaysia</option>
                                        <option value="MV">Maldives</option>
                                        <option value="ML">Mali</option>
                                        <option value="MT">Malta</option>
                                        <option value="MH">Marshall Islands</option>
                                        <option value="MQ">Martinique</option>
                                        <option value="MR">Mauritania</option>
                                        <option value="MU">Mauritius</option>
                                        <option value="YT">Mayotte</option>
                                        <option value="MX">Mexico</option>
                                        <option value="FM">Micronesia, Federated States of</option>
                                        <option value="MD">Moldova, Republic of</option>
                                        <option value="MC">Monaco</option>
                                        <option value="MN">Mongolia</option>
                                        <option value="ME">Montenegro</option>
                                        <option value="MS">Montserrat</option>
                                        <option value="MA">Morocco</option>
                                        <option value="MZ">Mozambique</option>
                                        <option value="MM">Myanmar</option>
                                        <option value="NA">Namibia</option>
                                        <option value="NR">Nauru</option>
                                        <option value="NP">Nepal</option>
                                        <option value="NL">Netherlands</option>
                                        <option value="NC">New Caledonia</option>
                                        <option value="NZ">New Zealand</option>
                                        <option value="NI">Nicaragua</option>
                                        <option value="NE">Niger</option>
                                        <option value="NG">Nigeria</option>
                                        <option value="NU">Niue</option>
                                        <option value="NF">Norfolk Island</option>
                                        <option value="MP">Northern Mariana Islands</option>
                                        <option value="NO">Norway</option>
                                        <option value="OM">Oman</option>
                                        <option value="PK">Pakistan</option>
                                        <option value="PW">Palau</option>
                                        <option value="PS">Palestinian Territory, Occupied</option>
                                        <option value="PA">Panama</option>
                                        <option value="PG">Papua New Guinea</option>
                                        <option value="PY">Paraguay</option>
                                        <option value="PE">Peru</option>
                                        <option value="PH">Philippines</option>
                                        <option value="PN">Pitcairn</option>
                                        <option value="PL">Poland</option>
                                        <option value="PT">Portugal</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="QA">Qatar</option>
                                        <option value="RE">Réunion</option>
                                        <option value="RO">Romania</option>
                                        <option value="RU">Russian Federation</option>
                                        <option value="RW">Rwanda</option>
                                        <option value="BL">Saint Barthélemy</option>
                                        <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                        <option value="KN">Saint Kitts and Nevis</option>
                                        <option value="LC">Saint Lucia</option>
                                        <option value="MF">Saint Martin (French part)</option>
                                        <option value="PM">Saint Pierre and Miquelon</option>
                                        <option value="VC">Saint Vincent and the Grenadines</option>
                                        <option value="WS">Samoa</option>
                                        <option value="SM">San Marino</option>
                                        <option value="ST">Sao Tome and Principe</option>
                                        <option value="SA">Saudi Arabia</option>
                                        <option value="SN">Senegal</option>
                                        <option value="RS">Serbia</option>
                                        <option value="SC">Seychelles</option>
                                        <option value="SL">Sierra Leone</option>
                                        <option value="SG">Singapore</option>
                                        <option value="SX">Sint Maarten (Dutch part)</option>
                                        <option value="SK">Slovakia</option>
                                        <option value="SI">Slovenia</option>
                                        <option value="SB">Solomon Islands</option>
                                        <option value="SO">Somalia</option>
                                        <option value="ZA">South Africa</option>
                                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                                        <option value="SS">South Sudan</option>
                                        <option value="ES">Spain</option>
                                        <option value="LK">Sri Lanka</option>
                                        <option value="SD">Sudan</option>
                                        <option value="SR">Suriname</option>
                                        <option value="SJ">Svalbard and Jan Mayen</option>
                                        <option value="SZ">Swaziland</option>
                                        <option value="SE">Sweden</option>
                                        <option value="CH">Switzerland</option>
                                        <option value="SY">Syrian Arab Republic</option>
                                        <option value="TW">Taiwan, Province of China</option>
                                        <option value="TJ">Tajikistan</option>
                                        <option value="TZ">Tanzania, United Republic of</option>
                                        <option value="TH">Thailand</option>
                                        <option value="TL">Timor-Leste</option>
                                        <option value="TG">Togo</option>
                                        <option value="TK">Tokelau</option>
                                        <option value="TO">Tonga</option>
                                        <option value="TT">Trinidad and Tobago</option>
                                        <option value="TN">Tunisia</option>
                                        <option value="TR">Turkey</option>
                                        <option value="TM">Turkmenistan</option>
                                        <option value="TC">Turks and Caicos Islands</option>
                                        <option value="TV">Tuvalu</option>
                                        <option value="UG">Uganda</option>
                                        <option value="UA">Ukraine</option>
                                        <option value="AE">United Arab Emirates</option>
                                        <option value="GB">United Kingdom</option>
                                        <option value="US">United States</option>
                                        <option value="UM">United States Minor Outlying Islands</option>
                                        <option value="UY">Uruguay</option>
                                        <option value="UZ">Uzbekistan</option>
                                        <option value="VU">Vanuatu</option>
                                        <option value="VE">Venezuela, Boliletian Republic of</option>
                                        <option value="VN">Viet Nam</option>
                                        <option value="VG">Virgin Islands, British</option>
                                        <option value="VI">Virgin Islands, U.S.</option>
                                        <option value="WF">Wallis and Futuna</option>
                                        <option value="EH">Western Sahara</option>
                                        <option value="YE">Yemen</option>
                                        <option value="ZM">Zambia</option>
                                        <option value="ZW">Zimbabwe</option>
                                    </select>
                                    
                                </div>
                                <div class="form-column">
                                    <label for="npi-adress">NPI Adress</label>
                                    <input type="text"  name="npiAdress">
                                    </div>
                                </div>




                                <div class="medical-credential__container">
                                    <div class="medical-credential__text">
                                        <p><span class="required-field">*</span>Credentials: (check all that apply)</p>
                                    </div>
                                <div class="medical-credential-checkboxs ">

                                    <div class='form-row'>
                                        <div class="form-column">
                                            <input type="checkbox" id="md" name="md" value="md">
                                            <label for="md">MD</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="do" name="do" value="Car">
                                            <label for="do">DO</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="phd" name="phd" value="Boat">
                                            <label for="phd">PhD</label>
                                        </div>
                                    </div>
                                    <div class='form-row'>
                                        <div class="form-column">
                                            <input type="checkbox" id="pharmd" name="pharmd" value="Bike">
                                            <label for="pharmd">PharmD</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="np" name="np" value="Car">
                                            <label for="np">NP</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="pa" name="pa" value="Boat">
                                            <label for="pa">PA</label>
                                        </div>
                                    </div>
                                    <div class='form-row'>
                                        <div class="form-column">
                                            <input type="checkbox" id="rph" name="rph" value="Boat">
                                            <label for="rph">RPh</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="rn" name="rn" value="Boat">
                                            <label for="rn">RN</label>
                                        </div>
                                        <div class="form-column-other">
                                            <label for="other">Other:</label>
                                            <input type="text"  name="other">
                                        </div>
                                    </div>
                                </div>





                                <div class="medical-product__container">
                                    <div class="medical-product__text">
                                        <p><span class="required-field">*</span>Product:</p>
                                    </div>
                                <div class="medical-product-checkboxs ">

                                    <div class='form-row'>
                                        <div class="form-column">
                                            <input type="checkbox" id="WC-122" name="WC-122" value="WC-122">
                                            <label for="WC-122">WC-122</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="WC-801" name="WC-801" value="Car">
                                            <label for="WC-801">WC-801</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="WC-1001" name="WC-1001" value="Boat">
                                            <label for="WC-1001">WC-1001</label>
                                        </div>
                                    </div>
                                    <div class='form-row'>
                                        <div class="form-column">
                                            <input type="checkbox" id="WC-701" name="WC-701" value="Bike">
                                            <label for="WC-701">WC-701</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="WC-901" name="WC-901" value="Car">
                                            <label for="WC-901">WC-901</label>
                                        </div>
                                        <div class="form-column">
                                            <input type="checkbox" id="Other" name="Other" value="Boat">
                                            <label for="Other">Other</label>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="provide-information__container">

                                <div class="provide-information__text">
                                    <p>Please provide information on the following:</p>
                                </div>

                                <textarea id="provide-information" name="provide-information" >
                                </textarea>
                            </div>








                            <div class="signature-container">
                                <div class="signature__text">
                                    <p>The digital signature below acknowledges the medical information request has been unsolicited.</p>
                                </div>

                            <div class="container">
                                            <canvas id="sig-canvas" width="620" height="160">
                                            </canvas>
                                            <div class="row">

                                                    <div id="ck-button">
                                                        <label>
                                                            <input  type="checkbox" id="sig-submitBtn" value="Submit Signature" >
                                                            <span>Submit</span>
                                                        </label>
                                                    </div>
                                        
                                                    <button  id="sig-clearBtn">Clear Signature</button>
                                            </div>
                                    <br/>
                                    <br/>
                                            <img id="sig-image" src="/assets/blank-transparent-img.png" class="signiture-placeholder" alt="Your signature will go here!"/>
                                            <input type="hidden" id="sigImageInput" name="sigImageInput" value="">
                                </div>

                            </div>


                            <div class="preferred-contact__container">
                            <div class="preferred-contact__text">
                                <p>Preferred Contact Method:</p>
                            </div>
                            <div class="preferred-contacts">
                                <input type="radio" id="preferredEmail" name="professional?" value="preferredEmail" checked>
                                <label for="preferredEmail">Email</label><br>

                                <input type="radio" id="preferredPhone" name="professional?" value="preferredPhone">
                                <label for="preferredPhone">Phone</label><br>
                            </div>
                        </div>




                            <div class="medical-info-form__submit__container">
                                <p class="medical-info-form__submit__text"><span class="required-field">*</span> Indicates a required field</p>
                                <button class="medical-info-form__submit" id="submit" type="submit" value="submit">
                                    <p >Submit</p>
                                    <div  class="medical-info-form__submit-inner"></div>
                                </button>
                            </div>
                </form>
            </div>
        </div>
        `


        checkboxValidation('medical-credential__container')
        checkboxValidation('medical-product__container')
        getDigitalSigniture()
        
        
        const medicalInfoForm = document.querySelector('#medical-form')
        
        medicalInfoForm.addEventListener('submit', (e) => {
            e.preventDefault()
            console.log("first name", e.target.firstName.value)
            console.log("last name",e.target.lastName.value)
            console.log("email",e.target.email.value)
            
            console.log("company",e.target.company.value)
            console.log("title",e.target.title.value)
            console.log("phoneNumber",e.target.phoneNumber.value)
            
            console.log("address",e.target.address.value)
            console.log("state",e.target.state.value)
            
            console.log("state",e.target.sigImageInput.value)
        
            content.classList.add("hide");
        })
    }
})



function checkboxValidation(sectionClassName) {
    const medicalForm = document.querySelector(`.${sectionClassName}`);
    const checkboxes = medicalForm.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) {
                return true
            }
        }
            return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
}








function getDigitalSigniture() {
    window.requestAnimFrame = (function(callback) {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimaitonFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
    })();
  
    let canvas = document.getElementById("sig-canvas");
    let ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4;
  
    let drawing = false;
    let mousePos = {
      x: 0,
      y: 0
    };
    let lastPos = mousePos;
  
    canvas.addEventListener("mousedown", function(e) {
      drawing = true;
      lastPos = getMousePos(canvas, e);
    }, false);
  
    canvas.addEventListener("mouseup", function(e) {
      drawing = false;
    }, false);
  
    canvas.addEventListener("mousemove", function(e) {
      mousePos = getMousePos(canvas, e);
    }, false);
  
    // Add touch event support for mobile
    canvas.addEventListener("touchstart", function(e) {
  
    }, false);
  
    canvas.addEventListener("touchmove", function(e) {
      let touch = e.touches[0];
      let me = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(me);
    }, false);
  
    canvas.addEventListener("touchstart", function(e) {
      mousePos = getTouchPos(canvas, e);
      let touch = e.touches[0];
      let me = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      canvas.dispatchEvent(me);
    }, false);
  
    canvas.addEventListener("touchend", function(e) {
      let me = new MouseEvent("mouseup", {});
      canvas.dispatchEvent(me);
    }, false);
  
    function getMousePos(canvasDom, mouseEvent) {
      let rect = canvasDom.getBoundingClientRect();
      return {
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
      }
    }
  
    function getTouchPos(canvasDom, touchEvent) {
      let rect = canvasDom.getBoundingClientRect();
      return {
        x: touchEvent.touches[0].clientX - rect.left,
        y: touchEvent.touches[0].clientY - rect.top
      }
    }
  
    function renderCanvas() {
      if (drawing) {
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(mousePos.x, mousePos.y);
        ctx.stroke();
        lastPos = mousePos;
      }
    }
  
    // Prevent scrolling when touching the canvas
    document.body.addEventListener("touchstart", function(e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchend", function(e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener("touchmove", function(e) {
      if (e.target == canvas) {
        e.preventDefault();
      }
    }, false);
  
    (function drawLoop() {
      requestAnimFrame(drawLoop);
      renderCanvas();
    })();
  
    function clearCanvas() {
      canvas.width = canvas.width;
    }
  
    // Set up the UI
    let sigImage = document.getElementById("sig-image");
    let sigPlaceholder = document.querySelector(".signiture-placeholder");
    let sigImageInput = document.getElementById("sigImageInput");
    let clearBtn = document.getElementById("sig-clearBtn");
    let submitBtn = document.getElementById("sig-submitBtn");
    clearBtn.addEventListener("click", function(e) {
        e.preventDefault()
        clearCanvas();
        sigImage.setAttribute("src", "/public/assets/blank-transparent-img.png");
    }, false);
    submitBtn.addEventListener("click", function(e) {
        e.preventDefault()
        sigPlaceholder.classList.add('show-signiture')
      let dataUrl = canvas.toDataURL();
      sigImage.setAttribute("src", dataUrl);
      sigImageInput.value = dataUrl
    }, false);
  
  }



















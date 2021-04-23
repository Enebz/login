import React, { useState } from 'react';

import Validation from '../utils/validation'

import Body from '../theme/layout/Body'
import Header from '../theme/text/Header';
import Card from '../theme/card/Card';
import Switch from '../theme/input/toggle/Switch';
import TextField from '../theme/input/fields/TextField';
import Text from '../theme/text/Text';
import Counter from '../theme/input/numbers/Counter';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


import { FaComment, FaEnvelope, FaUserAlt } from 'react-icons/fa';


const prices = {
  participation: 200,
  food: 150,
  equipment: 100,
  frisbees: {
    1: 200,
    2: 350,
    3: 500,
    5: 700
  }
}

function Bestill(props) {

  const [name, setName] = useState("")

  const [email, setEmail] = useState("")
  const [emailFocused, setEmailFocused] = useState(false)
  const [emailValid, setEmailValid] = useState(false)

  const [birthYear, setBirthYear] = useState(new Date().getFullYear())

  const [comment, setComment] = useState("")

  const [toggleable, setToggleable] = useState({
    food: false,
    equipment: true,
  });

  const [frisbees, setFrisbees] = useState(1)

  function onNameChange(event) {
    const new_name = event.target.value;
    setName(new_name);
  }

  function onEmailChange(event) {
    const new_email = event.target.value;

    setEmail(new_email);
    setEmailValid(Validation.validEmail(new_email));
  }

  function onEmailFocus() {
    setEmailFocused(true);
  }

  function onEmailBlur() {
    setEmailFocused(false);
  }

  function onBirthYearChange(event) {

    var new_birth_year = event.target.value;

    if (new_birth_year === null) { 
      setBirthYear(0); 
      return;
    }

    if (new_birth_year === "") { 
      setBirthYear(0); 
      return;
    }

    if (isNaN(new_birth_year)) { 
      setBirthYear(0); 
      return;
    }

    if (new_birth_year == 0) {
      setBirthYear(new_birth_year[1])
      return;
    }
    
    if (Validation.validBirthYear(new_birth_year)) {
      setBirthYear(new_birth_year);
    }
  }

  function onBirthYearIncrement() {
    if (!Validation.validBirthYear(birthYear + 1)) { return; }
    setBirthYear(birthYear+1);
  }

  function onBirthYearDecrement() {
    if (!Validation.validBirthYear(birthYear - 1)) { return; }
    setBirthYear(birthYear-1);
  }

  function onCommentChange(event) {
    const new_comment = event.target.value;
    setComment(new_comment);
  }

  const handleTogleableChange = (id) => {
    setToggleable({ ...toggleable, [id]: !toggleable[id] });
  };

  function handleFrisbeeChange(event, new_frisbees) {
    setFrisbees(new_frisbees);
  }
 
  return (
    <Body className="bestill">
      <div className="flex flex-col items-center">
        <Header className="text-2xl sm:text-4xl">Påmelding</Header>
        <Card className="w-full sm:w-5/6 p-4 space-y-4">
          <Text>* Obligatorisk felt</Text>
          <div className="flex flex-col md:flex-row">

            {/* Personal alia */}
            <div className="w-full md:w-1/2 pr-2 mb-4 md:mb-0">
              <Header className="text-xl">Person opplysninger</Header>
              <div className="flex flex-col space-y-2">
                <div>
                  <Text>Navn *</Text>
                  <TextField 
                    id="name"
                    type="name"
                    placeholder="Erna Solberg"
                    icon={
                      <FaUserAlt 
                        className={"text-coral-normal"}
                      />
                    }
                    onChange={onNameChange}
                    value={name}
                  />
                </div>

                <div>
                  <Text>Email *</Text>
                  <TextField 
                    id="email"
                    type="email"
                    placeholder="Email..."
                    icon={
                      <FaEnvelope 
                        className={
                          emailFocused && email.length > 0 ? 
                          (
                            emailValid ? 
                            "text-green-500" : 
                            "text-cinnabear-normal"
                          ) : 
                          "text-coral-normal"
                        }
                      />
                    }
                    onChange={onEmailChange}
                    onFocus={onEmailFocus}
                    onBlur={onEmailBlur}
                    value={email}
                  />
                </div>

                <div>
                  <Text>Fødselsår *</Text>
                  <Counter 
                    onIncrement={onBirthYearIncrement}
                    onDecrement={onBirthYearDecrement}
                    value={birthYear}
                    onChange={onBirthYearChange}
                  />
                </div>

                <div>
                  <Text>Kommentar</Text>
                  <TextField 
                    id="comment"
                    type="text"
                    placeholder="Jeg har glutenallergi..."
                    icon={
                      <FaComment 
                        className={"text-coral-normal"}
                      />
                    }
                    onChange={onCommentChange}
                    value={comment}
                  />
                </div>
              </div>
            </div>

            {/* Buying section */}
            <div className="w-full md:w-1/2 pl-2">
              <Header className="text-xl">Kjøp</Header>
              <div className="flex flex-col space-y-4">
                <div>
                  <Text>Deltakelse </Text>
                  <div className="flex items-center justify-between">
                    <Switch
                      disabled={true}
                      toggled={true}
                    />
                    <Text className="font-bold">{prices.participation}kr</Text>
                  </div>
                </div>
                <div>
                  <Text>Mat</Text>
                  <div className="flex items-center justify-between">
                    <Switch 
                      id="food"
                      onChange={handleTogleableChange}
                      toggled={toggleable.food}
                    />
                    <Text className="font-bold">{prices.food}kr</Text>
                  </div>
                </div>
                <div>
                  <Text>Utstyr</Text>
                  <div className="flex items-center justify-between">
                    <Switch 
                      id="equipment"
                      onChange={handleTogleableChange}
                      toggled={toggleable.equipment}
                    />
                    <Text className="font-bold">{prices.equipment}kr</Text>
                  </div>
                </div>
                <div>
                  <Text>Frisbeer</Text>
                  <div className="flex items-center justify-between">
                  <ToggleButtonGroup
                    value={frisbees}
                    exclusive
                    onChange={handleFrisbeeChange}
                    aria-label="frisbeer"
                    className="bg-eggshell-light"
                  >
                    <ToggleButton value={1} aria-label="1">
                      1
                    </ToggleButton>
                    <ToggleButton value={2} aria-label="2">
                      2
                    </ToggleButton>
                    <ToggleButton value={3} aria-label="3">
                      3
                    </ToggleButton>
                    <ToggleButton value={5} aria-label="5">
                      5
                    </ToggleButton>
                  </ToggleButtonGroup>
                    <Text className="font-bold">{prices.frisbees[frisbees]}kr</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Finish payment */}
          <div>
            <Header className="text-xl">Fullfør kjøp</Header>
          </div>
        </Card>
      </div>
    </Body>
  )
}

export default Bestill;

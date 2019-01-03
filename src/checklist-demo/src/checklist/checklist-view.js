import React from 'react';
import moment from 'moment';
import { goBack } from '@mobilex/routing';
import { showSuccessToast } from '@mobilex/toast';
import { LoadingScreen } from '@mobilex/ui-default-views';
import { desiredLocales } from '@mobilex/localization';
import { FormInfo } from '@mobilex/ui-input';
import {
  Form,
  SelectInput,
  DateInput,
  CheckboxInput,
  TextAreaInput,
  SignaturePadInput,
} from '@mobilex/ui-validating-input';
import { FormState, InputState } from '@mobilex/form-validation';
import { CategoryTitle } from '@mobilex/ui-card';
import resources from '../checklist-resources.yml';
import { getPresenceValidator } from './checklist-validators';

// two mocks with different language
import { serviceCheckDe, addressListDe } from '../mock-de';
import { serviceCheckEn, addressListEn } from '../mock';

export class ChecklistView extends React.Component {
  constructor(props) {
    super(props);
    this.model = props.model;
    this.state = {
      address: resources.stateNoAddress,
      loading: true,
      triggerChangedState: false,
    };
    this.addressList =
      desiredLocales[0].language === 'de' ? addressListDe : addressListEn;
    this.serviceCheck =
      desiredLocales[0].language === 'de' ? serviceCheckDe : serviceCheckEn;
    this.doneButton = this.doneButton.bind(this);
    this.getAddresstext = this.getAddresstext.bind(this);
    this.setAllToOk = this.setAllToOk.bind(this);
    this.formState = this.createFormState();
  }

  createFormState() {
    const inputStates = {
      today: new InputState({
        value: moment().format(resources.formatDate),
      }),
      device: new InputState({
        value: '',
        validator: getPresenceValidator(),
      }),
      lamelle: new InputState({
        value: '',
      }),
      luftkanal: new InputState({
        value: '',
      }),
      schmutz: new InputState({
        value: '',
      }),
      abtau: new InputState({
        value: false,
      }),
      regler: new InputState({
        value: false,
      }),
      notes: new InputState({
        value: '',
        validator: getPresenceValidator(),
      }),
      sign: new InputState({
        value: '',
      }),
      allOk: new InputState({
        value: false,
      }),
      lamellaNotOk: new InputState({
        value: '',
      }),
      luftkanalNotOk: new InputState({
        value: '',
      }),
      schmutzNotOk: new InputState({
        value: '',
      }),
    };
    this.model.installations.forEach(
      ins =>
        (inputStates[`done${ins.displayId}`] = new InputState({ value: false }))
    );
    return new FormState(inputStates);
  }

  doneButton() {
    showSuccessToast(resources.messageOnUpdated);
    goBack();
  }

  getAddresstext(value) {
    const addressObject = this.addressList.find(item => value === item.device);
    return addressObject.address;
  }

  setAllToOk(formState) {
    if (formState.values.allOk) {
      formState.values.schmutz = this.serviceCheck[0]; // eslint-disable-line no-param-reassign
      formState.values.lamelle = this.serviceCheck[0]; // eslint-disable-line no-param-reassign
      formState.values.luftkanal = this.serviceCheck[0]; // eslint-disable-line no-param-reassign
    } else {
      formState.values.schmutz = null; // eslint-disable-line no-param-reassign
      formState.values.lamelle = null; // eslint-disable-line no-param-reassign
      formState.values.luftkanal = null; // eslint-disable-line no-param-reassign
    }
    this.setState({ triggerChangedState: !this.state.triggerChangedState });
  }

  componentDidMount() {
    if (this.state.loading) {
      setTimeout(() => {
        this.setState({ loading: false });
      }, 1000);
    }
  }

  render() {
    const { inputStates, values } = this.formState;
    if (this.state.loading) {
      return <LoadingScreen />;
    }
    return (
      <Form
        submitMessage={resources.messageFormSubmit}
        submitIcon="mark"
        formState={this.formState}
        onSubmit={() => this.doneButton()}
      >
        <CategoryTitle text={resources.labelHeatPumpMaintenance} />
        <DateInput
          inputState={inputStates.today}
          label={resources.labelService}
        />
        <SelectInput
          inputState={inputStates.device}
          label={resources.labelDevice}
          options={this.addressList.map(item => item.device)}
          onChange={() =>
            this.setState({ address: this.getAddresstext(values.device) })
          }
        />
        <FormInfo text={this.state.address} />
        <CategoryTitle text={resources.labelMaintenance} />
        <CheckboxInput
          inputState={inputStates.allOk}
          label={resources.labelSetAllOk}
          onChange={() => this.setAllToOk(this.formState)}
        />
        <SelectInput
          inputState={inputStates.lamelle}
          label={resources.labelLamella}
          options={this.serviceCheck}
          addNullOption
          onChange={() =>
            this.setState({
              triggerChangedState: !this.state.triggerChangedState,
            })
          }
        />
        {this.formState.values.lamelle === this.serviceCheck[1] ? (
          <TextAreaInput
            inputState={inputStates.lamellaNotOk}
            label={resources.labelNotes}
          />
        ) : null}
        <SelectInput
          inputState={inputStates.luftkanal}
          label={resources.labelDuct}
          options={this.serviceCheck}
          addNullOption
          onChange={() =>
            this.setState({
              triggerChangedState: !this.state.triggerChangedState,
            })
          }
        />
        {this.formState.values.luftkanal === this.serviceCheck[1] ? (
          <TextAreaInput
            inputState={inputStates.luftkanalNotOk}
            label={resources.labelNotes}
          />
        ) : null}
        <SelectInput
          inputState={inputStates.schmutz}
          label={resources.labelFilter}
          options={this.serviceCheck}
          addNullOption
          onChange={() =>
            this.setState({
              triggerChangedState: !this.state.triggerChangedState,
            })
          }
        />
        {this.formState.values.schmutz === this.serviceCheck[1] ? (
          <TextAreaInput
            inputState={inputStates.schmutzNotOk}
            label={resources.labelNotes}
          />
        ) : null}
        <CategoryTitle text={resources.labelCheck} />
        <CheckboxInput
          inputState={inputStates.abtau}
          label={resources.labelDefrost}
        />
        <CheckboxInput
          inputState={inputStates.regler}
          label={resources.labelSetting}
        />
        {this.model.installations.map(ins => (
          <CheckboxInput
            key={`done${ins.displayId}`}
            inputState={inputStates[`done${ins.displayId}`]}
            label={`${ins.displayId} ${ins.shortText}`}
          />
        ))}
        <TextAreaInput
          inputState={inputStates.notes}
          label={resources.labelNotes}
        />
        <CategoryTitle text={resources.labelSign} />
        <SignaturePadInput inputState={inputStates.sign} />
      </Form>
    );
  }
}

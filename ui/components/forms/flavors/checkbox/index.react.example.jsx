/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Fieldset = props =>
  <fieldset className={className(pf('form-element'), props.className)}>
    {props.children}
  </fieldset>;

let Legend = props =>
  <legend className={pf('form-element__legend form-element__label')}>{props.children}</legend>;

let FormElement = props =>
  <div className={className(pf('form-element'), props.className)}>
    {props.children}
  </div>;

let FormElementLabel = props =>
  <label className={pf('form-element__label')} htmlFor={props.id}>Checkbox Label</label>;

let FormElementControl = props =>
  <div className={className(pf('form-element__control'), props.className)}>
    {props.children}
  </div>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    {props.children}
    <input type="checkbox" name="options" id={props.id} disabled={props.disabled} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('form-element__label')}>{props.label}</span>
  </label>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo>
    <FormElement>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label" />
      </FormElementControl>
    </FormElement>
  </Demo>;

let Required = props =>
  <Demo>
    <FormElement className={pf('is-required')}>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label"><abbr className={pf('required')} title="required">*</abbr></Checkbox>
      </FormElementControl>
    </FormElement>
  </Demo>;

let ErrorState = props =>
  <Demo>
    <FormElement className={pf('is-required has-error')}>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label"><abbr className={pf('required')} title="required">*</abbr></Checkbox>
      </FormElementControl>
      <div className={pf('form-element__help')} iref="form-element__help">This field is required</div>
    </FormElement>
  </Demo>;

let Disabled = props =>
  <Demo>
    <FormElement>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label" disabled />
      </FormElementControl>
    </FormElement>
  </Demo>;

let Group = props =>
  <Demo>
    <Fieldset>
      <Legend>Checkbox Group Label</Legend>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label" />
        <Checkbox id="checkbox-02" label="Checkbox Label" />
      </FormElementControl>
    </Fieldset>
  </Demo>;

let GroupRequired = props =>
  <Demo>
    <Fieldset className={pf('is-required')}>
      <Legend><abbr className={pf('required')} title="required">*</abbr> Checkbox Group Label</Legend>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label" />
        <Checkbox id="checkbox-02" label="Checkbox Label" />
      </FormElementControl>
    </Fieldset>
  </Demo>;

let GroupError = props =>
  <Demo>
    <Fieldset className={pf('is-required has-error')}>
      <Legend><abbr className={pf('required')} title="required">*</abbr> Checkbox Group Label</Legend>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label" />
        <Checkbox id="checkbox-02" label="Checkbox Label" />
      </FormElementControl>
      <div className={pf('form-element__help')} iref="form-element__help">This field is required</div>
    </Fieldset>
  </Demo>;

let GroupDisabled = props =>
  <Demo>
    <Fieldset>
      <Legend>Checkbox Group Label</Legend>
      <FormElementControl>
        <Checkbox id="checkbox-01" label="Checkbox Label" disabled></Checkbox>
        <Checkbox id="checkbox-02" label="Checkbox Label" disabled></Checkbox>
      </FormElementControl>
    </Fieldset>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'checkbox',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'checkbox-required',
    label: 'Required',
    element: <Required />
  },
  {
    id: 'checkbox-error',
    label: 'Error',
    element: <ErrorState />
  },
  {
    id: 'checkbox-disabled',
    label: 'Disabled',
    element: <Disabled />
  },
  {
    id: 'checkbox-group',
    label: 'Group',
    element: <Group />
  },
  {
    id: 'checkbox-group-required',
    label: 'Group Required',
    element: <GroupRequired />
  },
  {
    id: 'checkbox-group-error',
    label: 'Group with error',
    element: <GroupError />
  },
  {
    id: 'checkbox-group-disabled',
    label: 'Group Disabled',
    element: <GroupDisabled />
  }
];

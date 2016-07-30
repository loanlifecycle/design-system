/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { Pill, PillContainer } from 'ui/components/pills/flavors/base/index.react.example';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let LookupSingle = props =>
  <div className={className(pf('form-element lookup'), props.className)} data-select="single" data-scope="single">
    <label className={pf('form-element__label')} htmlFor={props.id}>{props.label}</label>
    <div className={pf('form-element__control input-has-icon input-has-icon--right')}>
      <SvgIcon className={pf('input__icon icon-text-default')} sprite="utility" symbol="search" />
      <input id={props.id} className={pf('lookup__search-input input')} type="text" aria-autocomplete="list" role="combobox" aria-expanded="true" aria-activedescendant="" placeholder="Search Accounts" defaultValue={props.value} />
    </div>
    {props.children}
  </div>;

let LookupWithSelection = props =>
  <div className={className(pf('form-element lookup has-selection'), props.className)} data-select="single" data-scope="single">
    <label className={pf('form-element__label')} htmlFor={props.id}>{props.label}</label>
    <div className={pf('form-element__control')}>
      <PillContainer>
        <Pill label="Paddy's Pub" unlinked className={pf('size--1-of-1')}>
          <span className={pf('icon_container icon-standard-account pill__icon_container')}>
            <SvgIcon className={pf('icon')} sprite="standard" symbol="account" />
            <span className={pf('assistive-text')}>Account</span>
          </span>
        </Pill>
      </PillContainer>
    </div>
    {props.children}
  </div>;

let LookupMenu = props =>
  <div className={pf('lookup__menu')} role="listbox">
    {props.children}
  </div>;

let LookupResults = props =>
  <ul className={pf('lookup__list')} role="presentation">
    {props.children}
  </ul>;

let LookupLabel = props =>
  <div className={pf('lookup__item--label text-body--small')}>
    {props.children}
  </div>;

let LookupAction = props =>
  <div>
    <a href="javascript:void(0);" className={pf('lookup__item-action lookup__item-action--label')}>
      {props.children}
    </a>
  </div>;

let LookupResultsItem = props =>
  <li>
    <a className={pf('lookup__item-action media media--center')} id={props.id} href="javascript:void(0);" role="option">
      <SvgIcon className={pf('icon icon-standard-account icon--small media__figure')} sprite="standard" symbol="account" />
      <div className={pf('media__body')}>
        {props.children}
      </div>
    </a>
  </li>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'lookup-single-scope',
    label: 'Default',
    element: <LookupSingle label="Parent Account" id="lookup-01" selectType="single" />
  },
  {
    id: 'lookup-single-scope-active',
    label: 'Active',
    element:
    <div className="demo-only" style={{ height: '350px' }}>
      <LookupSingle label="Parent Account" id="lookup-01" selectType="single" className={pf('is-open')}>
        <LookupMenu>
          <LookupLabel>Recent Accounts</LookupLabel>
          <LookupResults>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}>The Boston Consulting Group</div>
              <span className={pf('lookup__result-meta text-body--small')}>Boston</span>
            </LookupResultsItem>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}>Acuity</div>
              <span className={pf('lookup__result-meta text-body--small')}>Sheboygan</span>
            </LookupResultsItem>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}>SAS Insistute</div>
              <span className={pf('lookup__result-meta text-body--small')}>Cary</span>
            </LookupResultsItem>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}>Genentech</div>
              <span className={pf('lookup__result-meta text-body--small')}>South San Francisco</span>
            </LookupResultsItem>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}>Camden Property Trust</div>
              <span className={pf('lookup__result-meta text-body--small')}>Houston</span>
            </LookupResultsItem>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}>Salesforce.com Inc.</div>
              <span className={pf('lookup__result-meta text-body--small')}>San Francisco</span>
            </LookupResultsItem>
          </LookupResults>
          <LookupAction>
            <span className={pf('lookup__item-action-label')}>
              <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="add" />
              <span className={pf('truncate')}>Add Account</span>
            </span>
          </LookupAction>
        </LookupMenu>
      </LookupSingle>
    </div>
  },
  {
    id: 'lookup-single-scope-typing',
    label: 'Typeahead',
    element:
    <div className="demo-only" style={{ height: '230px' }}>
      <LookupSingle label="Parent Account" id="lookup-01" selectType="single" className={pf('is-open')} value="salesforce">
        <LookupMenu>
          <LookupAction>
            <SvgIcon className={pf('icon icon--x-small icon-text-default m-right--small')} sprite="utility" symbol="search" />
            <span className={pf('truncate')}>"salesforce" in accounts</span>
          </LookupAction>
          <LookupResults>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}><mark>Salesforce</mark>.com, Inc.</div>
              <span className={pf('lookup__result-meta text-body--small')}>San Francisco</span>
            </LookupResultsItem>
            <LookupResultsItem>
              <div className={pf('lookup__result-text')}><mark>Salesforce</mark>.com, Inc. - Paris</div>
              <span className={pf('lookup__result-meta text-body--small')}>Paris</span>
            </LookupResultsItem>
          </LookupResults>
          <LookupAction>
            <SvgIcon className={pf('icon icon--x-small icon-text-default')} sprite="utility" symbol="add" />
            <span className={pf('truncate')}>Add Account</span>
          </LookupAction>
        </LookupMenu>
      </LookupSingle>
    </div>
  },
  {
    id: 'lookup-single-scope-selection',
    label: 'With selection',
    element: <LookupWithSelection label="Parent Account" id="lookup-01" selectType="single" />
  }
];

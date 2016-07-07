/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// State Constructor(s)
///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" style={props.inverse ? { padding: '0.5rem', background: '#16325c' }: { padding: '0.5rem' }}>
    { props.children }
  </div>;

export let ButtonIcon = props =>
  <button className={className(pf('button'), props.className)} disabled={props.disabled} aria-haspopup={props.hasPopup}>
    <SvgIcon className={className(pf('button__icon'), props.iconClassName)} sprite="utility" symbol={props.symbol || 'settings'} />
    <span className={pf('assistive-text')}>{props.assistiveText || 'Settings'}</span>
  </button>;

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'button-icon',
    label: 'Default',
    element: <Demo><ButtonIcon className={pf('button--icon')} /></Demo>
  },
  {
    id: 'button-icon-disabled',
    label: 'Disabled',
    element: <Demo><ButtonIcon className={pf('button--icon')} disabled /></Demo>
  },
  {
    id: 'button-icon-inverse',
    label: 'Icon inversed',
    element: <Demo inverse><ButtonIcon inverse className={pf('button--icon-inverse')} /></Demo>
  },
  {
    id: 'button-icon-inverse-disabled',
    label: 'Icon inversed disabled',
    element: <Demo inverse><ButtonIcon inverse className={pf('button--icon-inverse')} disabled /></Demo>
  }
];

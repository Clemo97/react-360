/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
import ShadowView from './ShadowView';
export default class RCTRawText extends ShadowView {
  constructor() {
    super();
    this.text = '';
  }

  setText(text) {
    this.text = text;
    this.markTextDirty();
  }

  markTextDirty() {
    let node = this.getParent();

    while (node) {
      // $FlowFixMe - need to inspect existence of function
      if (typeof node.markTextDirty === 'function') {
        node.markTextDirty();
      }

      node = node.getParent();
    }
  }

  static registerBindings(dispatch) {
    super.registerBindings(dispatch);
    dispatch.text = this.prototype.setText;
  }

}
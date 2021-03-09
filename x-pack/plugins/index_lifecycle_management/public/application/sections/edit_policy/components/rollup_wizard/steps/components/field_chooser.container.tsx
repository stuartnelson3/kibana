/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React, { FunctionComponent } from 'react';

import { useFieldChooserContext } from '../../field_chooser_context';
import { useForm } from '../../../../../../../shared_imports';

// @ts-ignore
import { FieldChooser as FieldChooserView } from './field_chooser';

type Props = object;

export const FieldChooser: FunctionComponent<Props> = (props) => {
  const { indexPattern, updateIndexPattern, currentTab, setCurrentTab } = useFieldChooserContext();
  const { form } = useForm();
  return (
    <FieldChooserView
      {...props}
      customFieldForm={form}
      indexPattern={indexPattern}
      onIndexPatternChange={updateIndexPattern}
      currentTab={currentTab}
      onCurrentTabChange={setCurrentTab}
    />
  );
};

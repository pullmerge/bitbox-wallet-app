/**
 * Copyright 2023 Shift Crypto AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SettingsItem } from '@/routes/settings/components/settingsItem/settingsItem';

type TProps = {
    deviceID: string;
    passphraseEnabled: boolean;
}

const PassphraseSetting = ({ deviceID, passphraseEnabled }: TProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <SettingsItem
      onClick={() => navigate(`/settings/device-settings/passphrase/${deviceID}`)}
      settingName={t('deviceSettings.expert.passphrase.title')}
      secondaryText={t('deviceSettings.expert.passphrase.description')}
      displayedValue={ passphraseEnabled
        ? t('generic.enabled_true')
        : t('generic.enabled_false')}
    />
  );
};

export { PassphraseSetting };
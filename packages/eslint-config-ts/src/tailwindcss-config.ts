import type { ConfigWithExtends } from 'typescript-eslint';

import tailwind from 'eslint-plugin-tailwindcss';

export default [...tailwind.configs['flat/recommended']] as ConfigWithExtends[];

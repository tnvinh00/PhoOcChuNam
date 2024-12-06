import { Label, TextInput, Checkbox, Button } from 'flowbite-react';
import React from 'react';
import { login } from './action';

export default function LoginPage() {
  return (
    <form className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 dark:text-white">
        Sign in to our platform
      </h3>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          name="email"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput id="password" name="password" type="password" required />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Checkbox id="remember" name="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <a
          href="#"
          className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Lost Password?
        </a>
      </div>
      <div className="w-full">
        <Button type="submit" formAction={login}>
          Log in to your account
        </Button>
      </div>
      <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered?&nbsp;
        <a
          href="#"
          className="text-cyan-700 hover:underline dark:text-cyan-500"
        >
          Create account
        </a>
      </div>
    </form>
  );
}

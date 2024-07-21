import React from 'react';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Header } from './header';
import { BackButton } from './back-button';

type Props = {};

export const ErrorCard = (props: Props) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardFooter>
        <BackButton href="/auth/login" label="Back to login" />
      </CardFooter>
    </Card>
  );
};

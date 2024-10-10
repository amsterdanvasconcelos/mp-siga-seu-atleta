import { AthleteWithSport } from '@/lib/athletes';
import { GoPerson } from 'react-icons/go';
import { extractInstagramAccount, formatFollowersCount } from '@/lib/utils';

import { Avatar, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { RxInstagramLogo } from 'react-icons/rx';

function AthleteCard({ athlete }: { athlete: AthleteWithSport }) {
  const {
    instagramImageUrl,
    instagramName,
    sport,
    instagramFollowersCount,
    instagramBio,
    instagramUrl,
  } = athlete;

  return (
    <Card className="w-full group">
      <CardHeader className="flex items-start justify-between p-4 flex-row overflow-hidden gap-2">
        <div className="flex items-center space-x-4 truncate">
          <Avatar className="border-2 border-black w-14 h-14">
            {instagramImageUrl && (
              <AvatarImage
                className="object-cover"
                src={instagramImageUrl}
                alt="Avatar do atleta"
              />
            )}
          </Avatar>
          <div className="truncate">
            <CardTitle className="text-lg font-bold truncate">
              {instagramName}
            </CardTitle>
            <CardDescription className="text-sm truncate">
              {sport.name}
            </CardDescription>
          </div>
        </div>
        <div className="font-medium flex items-center gap-1">
          <GoPerson className="w-5 h-5" />
          {formatFollowersCount(instagramFollowersCount)}
        </div>
      </CardHeader>
      <CardContent className="p-4 text-sm text-gray-700 font-light flex-grow">
        <p className="min-h-[7.5em] leading-[1.5em]">{instagramBio}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-4 text-sm">
        <span className="font-bold truncate w-[40%]">
          @{extractInstagramAccount(instagramUrl)}
        </span>
        {instagramUrl && (
          <Link
            className="flex items-center space-x-1 text-blue-500"
            href={instagramUrl}
            prefetch={false}
            target="_blank"
          >
            <RxInstagramLogo className="w-4 h-4" />
            <span>Ver no instagram</span>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

export default AthleteCard;

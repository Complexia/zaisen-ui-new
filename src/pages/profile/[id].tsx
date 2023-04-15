<<<<<<< HEAD
import React from "react";
import { useProfileQuery, usePublicationsQuery } from "../../graphql/generated";
import styles from "../../styles/Profile.module.css";
import { useRouter } from "next/router";
import { MediaRenderer, Web3Button } from "@thirdweb-dev/react";
import FeedPost from "../../components/FeedPost";
import {
  LENS_CONTRACT_ABI,
  LENS_CONTRACT_ADDRESS,
} from "../../const/contracts";
import { useFollow } from "../../lib/useFollow";

type Props = {};

export default function ProfilePage({}: Props) {
  const router = useRouter();
  // Grab the path / [id] field from the URL
  const { id } = router.query;

  const { mutateAsync: followUser } = useFollow();

  const {
    isLoading: loadingProfile,
    data: profileData,
    error: profileError,
  } = useProfileQuery(
    {
      request: {
        handle: id,
      },
    },
    {
      enabled: !!id,
    }
  );

  const {
    isLoading: isLoadingPublications,
    data: publicationsData,
    error: publicationsError,
  } = usePublicationsQuery(
    {
      request: {
        profileId: profileData?.profile?.id,
      },
    },
    {
      enabled: !!profileData?.profile?.id,
    }
  );

  if (publicationsError || profileError) {
    return <div>Could not find this profile.</div>;
  }

  if (loadingProfile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContentContainer}>
        {/* Cover Image */}
        {/* @ts-ignore */}
        {profileData?.profile?.coverPicture?.original?.url && (
          <MediaRenderer
            // @ts-ignore
            src={profileData?.profile?.coverPicture?.original?.url || ""}
            alt={
              profileData?.profile?.name || profileData?.profile?.handle || ""
            }
            className={styles.coverImageContainer}
          />
        )}
        {/* Profile Picture */}
        {/* @ts-ignore */}
        {profileData?.profile?.picture?.original?.url && (
          <MediaRenderer
            // @ts-ignore
            src={profileData.profile.picture.original.url}
            alt={profileData.profile.name || profileData.profile.handle || ""}
            className={styles.profilePictureContainer}
          />
        )}

        {/* Profile Name */}
        <h1 className={styles.profileName}>
          {profileData?.profile?.name || "Anon User"}
        </h1>
        {/* Profile Handle */}
        <p className={styles.profileHandle}>
          @{profileData?.profile?.handle || "anonuser"}
        </p>

        {/* Profile Description */}
        <p className={styles.profileDescription}>{profileData?.profile?.bio}</p>

        <p className={styles.followerCount}>
          {profileData?.profile?.stats.totalFollowers} {" Followers"}
        </p>

        <Web3Button
          contractAddress={LENS_CONTRACT_ADDRESS}
          contractAbi={LENS_CONTRACT_ABI}
          action={async () => await followUser(profileData?.profile?.id)}
        >
          Follow User
        </Web3Button>

        <div className={styles.publicationsContainer}>
          {isLoadingPublications ? (
            <div>Loading Publications...</div>
          ) : (
            // Iterate over the items in the publications array
            publicationsData?.publications.items.map((publication) => (
              <FeedPost publication={publication} key={publication.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
=======
'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import { client, getPublications, getProfile } from '../../lensapi'

export default function Profile() {
  /* create initial state to hold user profile and array of publications */
  const [profile, setProfile] = useState<any>()
  const [publications, setPublications] = useState<any>([])
  /* using the router we can get the lens handle from the route path */
  const pathName = usePathname()
  const handle = pathName?.split('/')[2]
  
  useEffect(() => {
    if (handle) {
      fetchProfile()
    }
  }, [handle])

  async function fetchProfile() {
    try {
      /* fetch the user profile using their handle */
      const returnedProfile = await client.query({
        query: getProfile,
        variables: { handle }
      })
      const profileData = { ...returnedProfile.data.profile }
      /* format their picture if it is not in the right format */
      const picture = profileData.picture
      if (picture && picture.original && picture.original.url) {
        if (picture.original.url.startsWith('ipfs://')) {
          let result = picture.original.url.substring(7, picture.original.url.length)
          profileData.avatarUrl = `http://lens.infura-ipfs.io/ipfs/${result}`
        } else {
          profileData.avatarUrl = profileData.picture.original.url
        }
      }
      setProfile(profileData)
            /* fetch the user's publications from the Lens API and set them in the state */
      const pubs = await client.query({
        query: getPublications,
        variables: {
            id: profileData.id, limit: 50
        }
      })
      setPublications(pubs.data.publications.items)
    } catch (err) {
      console.log('error fetching profile...', err)
    }
  }

  if (!profile) return null

  return (
    <div className='pt-20'>
      <div className='flex flex-col justify-center items-center'>
        <img
          className='w-64 rounded-full'
          src={profile.avatarUrl}
        />
        <p className='text-4xl mt-8 mb-8'>{profile.handle}</p>
        <p className='text-center text-xl font-bold mt-2 mb-2 w-1/2'>{profile.bio}</p>
        {
            publications.map(pub => (
              <div key={pub.id} className='shadow p-10 rounded mb-8 w-2/3'>
                <p>{pub.metadata.content}</p>
              </div>
            ))
        }
      </div>
    </div>
  )
}
>>>>>>> 7979da1637032d8fefe095e43e353256fde0f6ea

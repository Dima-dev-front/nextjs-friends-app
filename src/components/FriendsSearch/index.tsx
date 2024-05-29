/* eslint-disable @next/next/no-img-element */
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
  type ChangeEvent,
} from 'react';
import { PiMagnifyingGlassBold } from 'react-icons/pi';
import { PiXBold } from 'react-icons/pi';
import debounce from 'lodash.debounce';

export const FriendsSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [inputValue, setInputValue] = useState(searchParams.get('query') || '');

  const updateSearchFilter = useRef(
    debounce((inputValue: string) => {
      const params = new URLSearchParams(searchParams);

      if (inputValue.trim()) {
        params.set('query', inputValue.trim());
      } else {
        params.delete('query');
      }

      router.replace(`${pathname}?${params.toString()}`);
    }, 300),
  ).current;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue('');
  };

  const handleClearButtonKeyDown = (e: KeyboardEvent<SVGElement>) => {
    if (e.code === 'Enter') {
      handleClearInput();
    }
  };

  useEffect(() => {
    updateSearchFilter(inputValue);
  }, [inputValue]);

  useEffect(() => {
    return () => {
      updateSearchFilter.cancel();
    };
  }, [updateSearchFilter]);

  return (
    <div
      className='border-gray300 focus-within:border-gray500 relative w-full max-w-[364px]
        flex-1 rounded-lg border-[1px] transition-colors hover:border-gray-500'
    >
      <PiMagnifyingGlassBold
        size={16}
        className='text-gray500 absolute left-[10px] top-1/2 -translate-y-1/2 lg:block'
      />
      <input
        type='text'
        placeholder='Search'
        className='placeholder:text-gray500
          w-full rounded-lg px-9 py-[14px]
          outline-none'
        value={inputValue}
        onChange={handleInputChange}
      />
      {inputValue && (
        <PiXBold
          size={16}
          className='text-gray500 absolute right-[10px] top-1/2 -translate-y-1/2
            cursor-pointer outline-none focus-visible:outline-black'
          onClick={handleClearInput}
          onKeyDown={handleClearButtonKeyDown}
          tabIndex={0}
        />
      )}
    </div>
  );
};

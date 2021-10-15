import React, { memo, VFC } from "react";
import Link from 'next/link';

export const Header: VFC = () => {
    return (
    <div className = 'flex justify-center items-center font-mono text-sm'>
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex pt-10 space-x-4">
            <Link href="/">
              <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                Home
              </a>
            </Link>
            <Link href="/OpenSpace">
              <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                質問広場
              </a>
            </Link>
            <Link href="/StudyGroup">
              <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                勉強会
              </a>
            </Link>
            <Link href="/Login">
              <a className="py-2 px-3 text-gray-300 hover:bg-gray-700 rounded">
                ログイン
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default memo(Header);

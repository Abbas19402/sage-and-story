'use client'

import { useState } from "react"
import { StoreRegion } from "@medusajs/types"
import { ArrowRightMini, XMark } from "@medusajs/icons"
import { clx, useToggleState } from "@medusajs/ui"
import CountrySelect from "../country-select"
import CountrySelectNav from "../country-select-nav"

export default function CountrySelectWrapper({ regions }: { regions: StoreRegion[] }) {
  const toggleState = useToggleState() 
  
  return (
    <div
        className="flex justify-between w-fit"
        onMouseEnter={toggleState.open}
        onMouseLeave={toggleState.close}
        >
        {regions && (
            <CountrySelectNav
                toggleState={toggleState}
                regions={regions}
            />
        )}
        </div>
  )
}
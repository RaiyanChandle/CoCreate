"use client"

import {useOrganizationList} from "@clerk/nextjs"
import {Item} from "./item"

export const List=()=>{
    const {userMemberships}=useOrganizationList({
        userMemberships:{
            infinite:true,
        },
    });

    if(userMemberships?.isLoading || !userMemberships?.data){
        return (
            <div className="flex justify-center items-center py-4">
                <div className="h-5 w-5 border-2 border-white border-t-blue-500 rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((org)=>(
                <Item key={org.organization.id} id={org.organization.id} name={org.organization.name} imageUrl={org.organization.imageUrl}/>
            ))}
        </ul>
    )
}


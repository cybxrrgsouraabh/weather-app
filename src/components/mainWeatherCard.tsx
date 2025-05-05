import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TailwindAsProps from "@/types/tailwindProp";


export function MainWeatherCard({className}:TailwindAsProps) {
    const APIkey = import.meta.env.VITE_WEATHER_API_KEY; 


    const fetchWeather = async(lat:string, lon:string)=>{
        const lati = parseFloat(lat);
        const longi = parseFloat(lon);
        try {
            console.log(lati)
            console.log(longi)
            const res = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${APIkey}`
            );

            console.log(res);
        } catch (error) {
            console.error("error occured while sending the api call", error);
        }
        


    }


    const fetchLocation = async()=>{
        
        const storedlong = localStorage.getItem("longitude");
        const storedlat = localStorage.getItem("latitude");
        
        if (storedlong && storedlat) {
          fetchWeather(storedlat, storedlong);
        } else {
          try {
            const response = await axios.get(
              "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,query"
            );
            console.log(response);
            const { lat, lon }:any = response.data;
            localStorage.setItem("latitude", lat);
            localStorage.setItem("longitude", lon);

            fetchWeather(lat, lon);

          } catch (error) {
            console.error("Error fetching location:", error);
          }
        }
    };

    useEffect(()=>{
        fetchLocation();
    },[])
    




  return (
    <div className={className}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Location</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

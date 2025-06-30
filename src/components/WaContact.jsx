"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function Waicon() {
  return (
    <div className="overflow-x-hidden">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button
            className="cursor-pointer fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
            aria-label="WhatsApp ile iletişim"
          >
            <FaWhatsapp size={40} />
          </button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>WhatsApp’a yönlendirileceksiniz</AlertDialogTitle>
            <AlertDialogDescription>
              Randevu almak için WhatsApp üzerinden iletişime geçmek istiyor
              musunuz?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Vazgeç</AlertDialogCancel>
            <AlertDialogAction
              onClick={() =>
                window.open("https://wa.me/905073844820", "_blank")
              }
            >
              Evet, devam et
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

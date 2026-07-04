import React, { useState } from 'react';
import { motion } from 'motion/react';
import { format, addDays, startOfToday, isSameDay, startOfMonth, endOfMonth, eachDayOfInterval, addMonths, subMonths, isBefore } from 'date-fns';
import { ChevronLeft, ChevronRight, Clock, Send } from 'lucide-react';
import { cn } from '../lib/utils';

const Calendar = ({ selectedDate, onSelectDate }: { selectedDate: Date, onSelectDate: (d: Date) => void }) => {
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(selectedDate));
  
  const days = eachDayOfInterval({
    start: currentMonth,
    end: endOfMonth(currentMonth),
  });

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startDayIdx = currentMonth.getDay();

  return (
    <div className="p-8 bg-white shadow-xl border border-slate-100 rounded-2xl">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-serif font-bold">{format(currentMonth, 'MMMM yyyy')}</h3>
        <div className="flex space-x-4">
          <button onClick={prevMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-full transition-colors flex items-center">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-4">
        {weekDays.map(d => (
          <div key={d} className="text-[10px] uppercase tracking-widest text-slate-400 font-bold text-center py-2">{d}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: startDayIdx }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => {
          const isSelected = isSameDay(day, selectedDate);
          const isPast = isBefore(day, startOfToday());
          
          return (
            <button
              key={day.toString()}
              disabled={isPast}
              onClick={() => onSelectDate(day)}
              className={cn(
                "h-12 w-full rounded-xl flex items-center justify-center text-sm font-medium transition-all relative group",
                isSelected ? "bg-slate-900 text-white shadow-lg" : "hover:bg-slate-50 text-slate-800",
                isPast ? "opacity-20 cursor-not-allowed" : "cursor-pointer"
              )}
            >
              {format(day, 'd')}
              {isSelected && (
                <motion.div 
                  layoutId="dot"
                  className="absolute bottom-2 w-1 h-1 bg-brand-gold rounded-full" 
                />
              )}
            </button>
          );
        })}
      </div>
      
      <div className="mt-8 flex items-center space-x-6 text-[10px] uppercase tracking-widest text-slate-400 font-bold">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-slate-900" />
          <span>Selected</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-slate-200" />
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
};

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(addDays(startOfToday(), 1));
  const [selectedTime, setSelectedTime] = useState('10:00');

  const times = ['10:00', '14:00', '16:00', '19:00'];

  return (
    <div className="pt-32 pb-40">
      <section className="px-6 md:px-12 mb-20 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-6 block">Reservation</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">방문 상담 예약</h1>
          <div className="flex justify-center mb-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://m.booking.naver.com/booking/13/bizes/1180716/items/5971491?area=pll&lang=ko&service-target=map-pc&startDate=2026-04-20&theme=place"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-3 bg-[#e52528] text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_10px_30px_rgba(229,37,40,0.4)] hover:shadow-[0_15px_40px_rgba(229,37,40,0.5)] transition-all duration-300"
            >
              <span className="w-8 h-8 bg-white text-[#e52528] rounded-full flex items-center justify-center font-black text-xs group-hover:rotate-12 transition-transform">N</span>
              <span>네이버로 빠른 예약</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.div>
              <div className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white/20"></span>
              </div>
            </motion.a>
          </div>
          <p className="text-slate-500 font-light text-lg leading-relaxed">
            전문 인테리어 디렉터와의 1:1 방문 상담을 예약하세요. <br className="hidden md:block" />
            공간의 시작과 끝을 MID인테리어가 함께 고민합니다.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Calendar Side */}
          <div className="lg:col-span-12 xl:col-span-5">
             <Calendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
             
             <div className="mt-12 p-8 bg-slate-900 text-white rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/20 blur-3xl" />
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-brand-gold mb-4">Notification</h4>
                <p className="text-sm font-light leading-relaxed text-white/70">
                  • 주말 및 공휴일에도 방문상담이 가능합니다. <br/>
                  • 시공 요청 지역에 따라 일정이 조율될 수 있습니다. <br/>
                  • 네이버 예약 시스템을 통해 쉽고 편리하게 실시간 확정이 가능합니다.
                </p>
             </div>
          </div>

          {/* Guidance Side */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-10">
            <div className="bg-slate-50/50 p-10 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-serif font-bold mb-8 flex items-center">
                <Clock className="mr-3 text-brand-gold" size={20} /> 
                상담 시간 선택 (선택한 날짜: {format(selectedDate, 'yyyy-MM-dd')})
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {times.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={cn(
                      "py-4 border text-sm font-bold transition-all",
                      selectedTime === t 
                        ? "bg-slate-900 border-slate-900 text-white shadow-lg" 
                        : "border-slate-200 bg-white text-slate-500 hover:border-slate-400"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-slate-100 flex flex-col items-center text-center space-y-6">
              <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center">
                <Send size={28} />
              </div>
              <div>
                <h4 className="text-lg font-serif font-bold text-slate-900 mb-2">실시간 빠른 예약 안내</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  선택하신 일정(<span className="font-semibold text-slate-800">{format(selectedDate, 'yyyy년 MM월 dd일')} {selectedTime}</span>) 또는 원하시는 편하신 시간에 맞춰 예약을 진행하시려면, <br className="hidden md:block" />
                  상단의 <span className="font-semibold text-[#e52528]">'네이버로 빠른 예약'</span> 버튼을 클릭하여 예약을 확정해 주시기 바랍니다.
                </p>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://m.booking.naver.com/booking/13/bizes/1180716/items/5971491?area=pll&lang=ko&service-target=map-pc&startDate=2026-04-20&theme=place"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 bg-[#e52528] text-white uppercase tracking-[0.2em] font-bold hover:bg-[#c21f22] transition-all flex items-center justify-center rounded-xl text-sm shadow-[0_4px_15px_rgba(229,37,40,0.2)]"
              >
                네이버 예약으로 바로가기
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;

import React, { useState, useEffect, useCallback, useRef } from 'react';
import gsap from 'gsap';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Slider } from './ui/Slider';
import { Switch } from './ui/Switch';
import { Label } from './ui/Label';
import { Separator } from './ui/Separator';
import { CopyIcon } from 'lucide-react';

const PasswordGeneratorCard = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [copied, setCopied] = useState(false);
  const passwordRef = useRef(null);

  // GSAP animation ref
  const cardRef = useRef(null);

  useEffect(() => {
    // GSAP entrance animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
  }, []);

  const generatePassword = useCallback(() => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    let newPassword = "";

    if (includeUppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) characters += "0123456789";
    if (includeSpecialChars) characters += "!@#$%^&*()_+-=[]{};:'\"\\|,<.>/?`~";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  }, [passwordLength, includeNumbers, includeSpecialChars, includeUppercase]);

  useEffect(() => {
    generatePassword();
  }, [passwordLength, includeNumbers, includeSpecialChars, includeUppercase, generatePassword]);

  const handleCopyPassword = () => {
    if (document.execCommand) {
      if (passwordRef.current) {
        passwordRef.current.select();
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } else {
      console.warn("document.execCommand('copy') is not supported in this environment.");
      alert('Your browser does not support this feature.');
    }
  };

  return (
    <Card
      ref={cardRef}
      className="w-full max-w-xl bg-gray-800 border-gray-700 shadow-xl"
    >
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-gray-50">Password Generator</CardTitle>
        <CardDescription className="text-center text-gray-400">
          Create a strong and secure password with custom options.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex w-full items-center space-x-2">
          <div className="relative flex-grow">
            <Input 
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              className="pr-12 text-center text-lg bg-gray-700 border-gray-600 focus:border-indigo-500 text-gray-50"
            />
            {copied && (
              <span className="absolute right-14 top-1/2 -translate-y-1/2 text-xs font-semibold text-green-400 animate-pulse">
                Copied!
              </span>
            )}
          </div>
          <Button
            onClick={handleCopyPassword}
            variant="secondary"
            className="bg-indigo-600 hover:bg-indigo-700 text-gray-50 border-none transition-colors"
          >
            <CopyIcon className="h-4 w-4 mr-2" /> Copy
          </Button>
        </div>

        <Separator className="bg-gray-700" />

        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="length-slider" className="text-base">
              Password Length: <span className="font-bold text-indigo-400">{passwordLength}</span>
            </Label>
            <Slider
              id="length-slider"
              min={8}
              max={50}
              step={1}
              value={[passwordLength]}
              onValueChange={(value) => setPasswordLength(value[0])}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="numbers" className="text-base">Include Numbers</Label>
            <Switch
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
              className="data-[state=checked]:bg-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="special-chars" className="text-base">Include Special Characters</Label>
            <Switch
              id="special-chars"
              checked={includeSpecialChars}
              onCheckedChange={setIncludeSpecialChars}
              className="data-[state=checked]:bg-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="uppercase" className="text-base">Include Uppercase Letters</Label>
            <Switch
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
              className="data-[state=checked]:bg-indigo-500"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PasswordGeneratorCard;
